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
    // const url = response.config.url?.toLowerCase();
    // if (url?.includes("/login") || url?.includes("/register")) {
    //   const responseData = response.data as Response;
    //   Cookies.set("accessToken", responseData.result.access, { expires: env.VITE_Refresh_Expire, secure: true, sameSite: "Strict" });
    //   Cookies.set("refreshToken", responseData.result.refresh, { expires: env.VITE_Refresh_Expire, secure: true, sameSite: "Strict" });
    //   return response;
    // }
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
        const { data: token } = await instance.post("/api/refresh-token", { refreshToken });
        Cookies.set("refreshToken", token, { expires: env.VITE_Refresh_Expire, secure: true, sameSite: "Strict" });
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
