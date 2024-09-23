import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AuthResponse, LoginFormValues, RegisterFormValues } from "@custom-types/index";
import type { AxiosError, AxiosResponse } from "axios";
import { env } from "@/env";
import { useCookies } from "react-cookie";
import { queryClient } from "@wrappers/index";

type RegisterErrorResponse = Array<string>

export const useSign = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [_, setCookie, removeCookie] = useCookies(['refreshToken','accessToken']);
  const login = useMutation<AxiosResponse<AuthResponse>, AxiosError<AuthResponse>, LoginFormValues>({
    mutationFn: (loginData) => instance.post("/api/user/login", loginData),
    onSuccess(data) {
        setCookie("refreshToken", data.data.result.refresh,{secure:true,maxAge:env.VITE_Refresh_Expire,sameSite:"strict"});
        setCookie("accessToken", data.data.result.access,{secure:true,maxAge:env.VITE_Access_Expire,sameSite:"strict"});
    },
    onError(error) {
        console.error(error)
    },
  });
  
  const register = useMutation<AxiosResponse<AuthResponse>, AxiosError<RegisterErrorResponse>, RegisterFormValues>({
    mutationFn: (registerData) => instance.post("/api/user/register", registerData),
    onSuccess(data) {
      setCookie("refreshToken", data.data.result.refresh,{secure:true,maxAge:env.VITE_Refresh_Expire,sameSite:"strict"});
      setCookie("accessToken", data.data.result.access,{secure:true,maxAge:env.VITE_Access_Expire,sameSite:"strict"});
  },
    onError(error) {
      console.error(error)
  },
  });

  const deleteAccount = useMutation<AxiosResponse<AuthResponse>, AxiosError<RegisterErrorResponse>>({
    mutationFn: () => instance.delete("/api/user/delete"),
    onSuccess() {
      removeCookie('accessToken')
      removeCookie('refreshToken')
      queryClient.clear();
  },
    onError(error) {
      console.error(error)
  },
  });
  const logOut = ()=>{
    removeCookie('accessToken')
    removeCookie('refreshToken')
    queryClient.clear();
}

  return { login, register,logOut,deleteAccount};
};
