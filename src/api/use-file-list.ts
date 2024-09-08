import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";
import { errorHandler } from "@helpers/error-handler";

export const useFileList = () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, FormData>({
    mutationFn: (file) => instance.post("/api/company/file/create", file),
    onError(error) {
      console.error(errorHandler(error));
    },
  });
};
