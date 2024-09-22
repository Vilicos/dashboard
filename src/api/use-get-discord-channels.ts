import { useQuery } from "@tanstack/react-query";
import instance from "./instance";

interface GetDiscordChannels {
  results: Array<{
    id:number;
    created:string;
    is_active:boolean;
    modified:string;
    name:string;
    type:string
  }>;
}

type IProps = string | undefined;

export const fetchGetDiscordChannels = async () => {
  const response = await instance.get<GetDiscordChannels>("/api/discord-bot/channels");
  return response.data;
};

export const useGetDiscordChannels = (parameters: IProps) =>
  useQuery({
    queryKey: ["getDiscordChannels", parameters],
    retry: 0,
    queryFn: fetchGetDiscordChannels,
    placeholderData: (previousData) => previousData,
    staleTime: 10 * (60 * 1000), //10 mins
    enabled: !!parameters,
  });
