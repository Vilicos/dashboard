import axios, { type AxiosError, type AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { env } from "@/env";
import { refreshTokenOptions } from "@constants/static-data";

const instance = axios.create({
  baseURL: env.VITE_Base_URL,
  timeout: 10 * 60 * 1000, // 10 mins
  withCredentials: true,
});

instance.interceptors.request.use(
  (config) => {
    const url = config.url?.toLowerCase();
    if (url?.includes("/login") || url?.includes("/register")) {
      return config;
    }
    const token = Cookies.get("accessToken");
    const originalRequest = config.headers;
    if (token) {
      originalRequest.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;
    const status = error.response ? error.response.status : null;

    const url = originalRequest?.url?.toLowerCase();
    if (url?.includes("/login") || url?.includes("/register")) {
      throw error;
    }

    if (status === 401 && originalRequest) {
      try {
        const refreshToken = Cookies.get("refreshToken");
        const { data: token } = await instance.post("/api/refresh-token", { refreshToken });
        Cookies.set("refreshToken", token, { refreshTokenOptions });
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return await instance(originalRequest);
      } catch (error) {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        throw error;
      }
    }
    throw error;
  }
);

export default instance;
