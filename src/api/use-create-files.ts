import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";

export const useCreateFiles= () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, FormData>({
    mutationFn: (file) => instance.post("/api/company/file/create", file),
    onError(error) {
      console.error(error);
    },
  });
};
