import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";

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

export const useCreateCompany = () => {
  return useMutation<AxiosResponse<SuccessResponse>, AxiosError<ErrorResponse>, FormData>({
    mutationFn: (formData) => instance.post("/api/company/create", formData),
    onError(error) {
      console.error(error);
    },
  });
};
