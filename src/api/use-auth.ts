import { useMutation, useQueryClient } from "@tanstack/react-query";
import instance from "./instance";
import type { AuthResponse, BaseResponse, LoginFormValues, RegisterFormValues } from "@custom-types/index";
import type { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { accessTokenOptions, refreshTokenOptions } from "@constants/static-data";
import { useEffect, useState } from "react";
import { errorHandler } from "@helpers/error-handler";

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hasCompany, setHasCompany] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const checkAuthStatus = () => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");
    return !!(accessToken && refreshToken);
  };

  const checkCompanyStatus = async () => {
    try {
      const response = await instance.get("/api/user/company");
      setHasCompany(!!response.data);
      return !!response.data;
    } catch (error) {
      console.error("Error checking company status:", error);
      setHasCompany(false);
      return false;
    }
  };

  useEffect(() => {
    const authStatus = checkAuthStatus();
    setIsLoggedIn(authStatus);
    if (authStatus) {
      checkCompanyStatus();
    }
  }, []);

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setIsLoggedIn(false);
    queryClient.clear();
  };

  const login = useMutation<AxiosResponse<AuthResponse>, AxiosError<BaseResponse>, LoginFormValues>({
    mutationFn: (loginData) => instance.post("/api/user/login", loginData),
    onSuccess(data) {
      const { access, refresh } = data.data.result;
      Cookies.set("refreshToken", refresh, { accessTokenOptions });
      Cookies.set("accessToken", access, { refreshTokenOptions });
    },
    onError(error) {
      console.error(errorHandler(error));
    },
  });
  
  const register = useMutation<AxiosResponse<AuthResponse>, AxiosError<BaseResponse>, RegisterFormValues>({
    mutationFn: (registerData) => instance.post("/api/user/register", registerData),
    onSuccess(data) {
      const { access, refresh } = data.data.result;
      Cookies.set("refreshToken", refresh, { accessTokenOptions });
      Cookies.set("accessToken", access, { refreshTokenOptions });
    },
    onError(error) {
      console.error(errorHandler(error));
    },
  });

  return { login, register, logout, isLoggedIn,hasCompany };
};
