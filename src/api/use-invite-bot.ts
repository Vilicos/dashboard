import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse,} from "@custom-types/index";
// import { queryClient } from "@wrappers/index";

type InviteResponse = {
    result:string;
}

export const useInviteBot = () => {
  return useMutation<AxiosResponse<InviteResponse>, AxiosError<BaseResponse>>({
    mutationFn: () => instance.get(`/api/discord-bot/oauth/authorization/`),
    onError(error) {
      console.error(error);
    },
    // onSettled() {
    //   queryClient.refetchQueries({ queryKey: ["getFiles"] });
    // },
  });
};
