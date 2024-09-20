import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";
import { queryClient } from "@wrappers/index";

export const useDeleteTeamMembers = () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, number>({
    mutationFn: (id) => instance.delete(`/api/company/team-members/delete/${id}`),
    onError(error) {
      console.error(error);
    },
    onSettled() {
      queryClient.refetchQueries({ queryKey: ["getTeamMembers"] });
    },
  });
};
