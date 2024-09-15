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
type IProps = {
    formData:FormData;
    id:number
}

export const useUpdateCompany = () => {
  return useMutation<AxiosResponse<SuccessResponse>, AxiosError<ErrorResponse>, IProps>({
    mutationFn: (data) => instance.put(`/api/company/update/${data.id}`, data.formData),
    onError(error) {
      console.error(error);
    },
    onSettled(){
        queryClient.refetchQueries({ queryKey: ["getCompany"] });
    }
  });
};
