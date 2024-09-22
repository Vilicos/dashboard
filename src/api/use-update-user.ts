import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import { queryClient } from "@wrappers/index";

type SuccessResponse = {
    status:string;
    message:string;
    result:{
        name:string;
        logo:string
    }
}
type ErrorResponse = {
    status:string;
    result:string;
    message:{
        [key:string]:Array<string>
    }
}

type Argument = {full_name:string;password?:string}
export const useUpdateUser = () => {
  return useMutation<AxiosResponse<SuccessResponse>, AxiosError<ErrorResponse>, Argument>({
    mutationFn: (data) => instance.put(`/api/user/profile/update`, data),
    onError(error) {
      console.error(error);
    },
    onSettled(){
        queryClient.refetchQueries({ queryKey: ["getCompany"]});
    }
  });
};
