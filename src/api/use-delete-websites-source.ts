import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";
import { queryClient } from "@wrappers/index";

export const useDeleteWebsitesSource = () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, number>({
    mutationFn: (id) => instance.delete(`/api/company/website/source/delete/${id}`),
    onError(error) {
      console.error(error);
    },
    onSettled() {
      queryClient.refetchQueries({ queryKey: ["getWebsitesSource"] });
    },
  });
};
