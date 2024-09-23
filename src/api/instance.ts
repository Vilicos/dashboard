import axios, { type AxiosError, type AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { env } from "@/env";

const instance = axios.create({
  ...(import.meta.env.MODE === "production" && { baseURL: env.VITE_Base_URL }),
  timeout: 10 * 60 * 1000, // 10 mins
  withCredentials: true,
});

// instance.defaults.headers.common['Content-Type'] = 'application/json';

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
  (response: AxiosResponse) => {
    return response;
  },
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
        const { data } = await instance.post<{ access: string }>("/api/user/token/refresh", { refresh: refreshToken });
        Cookies.set("accessToken", data.access, { expires: env.VITE_Access_Expire_Instance, secure: true, sameSite: "Strict" });
        originalRequest.headers.Authorization = `Bearer ${data.access}`;
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
