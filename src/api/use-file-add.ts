import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { FileAddResponse } from "@custom-types/index";

export const useFileAdd = () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError, FormData>({
    mutationFn: (file) => instance.post("/api/company/file/create", file),
    onError(error) {
      console.error(`${error.code}: ${error.message}`);
    },
  });
};
