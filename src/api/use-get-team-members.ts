import { useQuery } from "@tanstack/react-query";
import instance from "./instance";
import type { UserRole } from "@custom-types/index";

interface GetTeamMembers {
  count: number;
  next: null;
  previous: null;
  results: Array<{
    id: number;
    created: string;
    modified: string;
    users: Array<{
      id: number;
      email: string;
      full_name: string;
      is_active: boolean;
      user_type: `${UserRole}`;
      created: string;
      modified: string;
    }>;
  }>;
}

type IProps = string | undefined;

export const fetchGetTeamMembers = async () => {
  const response = await instance.get<GetTeamMembers>("/api/company/team-members");
  return response.data;
};

export const useGetTeamMembers = (parameters: IProps) =>
  useQuery({
    queryKey: ["getTeamMembers", parameters],
    retry: 0,
    queryFn: fetchGetTeamMembers,
    placeholderData: (previousData) => previousData,
    staleTime: 10 * (60 * 1000), //10 mins
    enabled: !!parameters,
  });
