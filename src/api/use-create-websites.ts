import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";
import { queryClient } from "@wrappers/index";


export const useCreateWebsites= () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, {name:string}>({
    mutationFn: (website) => instance.post("/api/company/website/create", website),
    onError(error) {
      console.error(error);
    },
    onSettled() {
        queryClient.refetchQueries({ queryKey: ["getWebsites"] });
      },
  });
};
