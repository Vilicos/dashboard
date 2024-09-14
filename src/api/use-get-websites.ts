import { useQuery } from "@tanstack/react-query";
import instance from "./instance";

interface GetWebsites {
  results: [
    {
      id: number;
      name: string;
      created:string;
      modified:string;
      source_count:number
    }
  ];
}

type IProps = string | undefined;

export const fetchGetWebsites = async () => {
  const response = await instance.get<GetWebsites>("/api/company/websites");
  return response.data;
};

export const useGetWebsites = (parameters: IProps) =>
  useQuery({
    queryKey: ["getWebsites"],
    retry: 0,
    refetchInterval:30000,
    queryFn: fetchGetWebsites,
    placeholderData: (previousData) => previousData,
    staleTime: 10 * (60 * 1000), //10 mins
    enabled: !!parameters,
  });
