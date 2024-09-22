import { useMutation } from "@tanstack/react-query";
import instance from "./instance";
import type { AxiosError, AxiosResponse } from "axios";
import type { BaseResponse, FileAddResponse, UserRole } from "@custom-types/index";
import { queryClient } from "@wrappers/index";

type InviteMembers = {
  full_name:string;
  email:string;
  role:`${UserRole}`
}
export const useInviteMember= () => {
  return useMutation<AxiosResponse<FileAddResponse>, AxiosError<BaseResponse>, InviteMembers>({
    mutationFn: (data) => instance.post("/api/company/team-members/invite-member", data),
    onError(error) {
      console.error(error);
    },
    onSettled() {
      queryClient.refetchQueries({ queryKey: ["getTeamMembers"] });
    },
  });
};
