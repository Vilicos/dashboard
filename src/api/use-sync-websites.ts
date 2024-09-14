import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";
import { queryClient } from "@wrappers/index";

export const useSyncWebsites= () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, number>({
    mutationFn: (id) => instance.post(`/api/knowledge/scraper/website/${id}`),
    onError(error) {
      console.error(error);
    },
    onSettled() {
      queryClient.refetchQueries({ queryKey: ["getWebsites"] });
    },
  });
};
