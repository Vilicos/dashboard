import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AuthResponse, LoginFormValues, RegisterFormValues } from "@custom-types/index";
import type { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { accessTokenOptions, refreshTokenOptions } from "@constants/static-data";

export const useAuth = () => {
  const login = useMutation<AxiosResponse<AuthResponse>, AxiosError, LoginFormValues>({
    mutationFn: (loginData) => instance.post("/api/user/login", loginData),
    onSuccess(data) {
      const {access,refresh} = data.data.result;
      Cookies.set("refreshToken", refresh, {accessTokenOptions});
      Cookies.set("accessToken", access, {refreshTokenOptions});
    },
    onError(error) {
      console.error(`${error.code}: ${error.message}`);
    },
  });

  const register = useMutation<AxiosResponse<AuthResponse>, AxiosError, RegisterFormValues>({
    mutationFn: (registerData) => instance.post("/api/user/register", registerData),
    onSuccess(data) {
      const {access,refresh} = data.data.result;
      Cookies.set("refreshToken", refresh, {accessTokenOptions});
      Cookies.set("accessToken", access, {refreshTokenOptions});
    },
    onError(error) {
      console.error(`${error.code}: ${error.message}`);
    },
  });

  return { login,register };
};
