import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse } from "@custom-types/index";
import { queryClient } from "@wrappers/index";

type IProps = {
  is_active: boolean;
};

export const useUpdateDiscordChannel = (id:number) => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, IProps>({
    mutationFn: (data) => instance.put(`/api/discord-bot/channels/update/${id}`, data),
    onError(error) {
      console.error(error);
    },
    onSettled() {
      queryClient.refetchQueries({ queryKey: ["getDiscordChannels"] });
    },
  });
};
