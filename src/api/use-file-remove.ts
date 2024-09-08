import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileRemoveResponse } from "@custom-types/index";
import { errorHandler } from "@helpers/error-handler";

export const useFileRemove = () => {
  return useMutation<AxiosResponse<FileRemoveResponse>, AxiosError<BaseResponse>, number>({
    mutationFn: (id) => instance.post(`/api/company/file/delete/${id}`),
    onError(error) {
      console.error(errorHandler(error));
    },
  });
};
