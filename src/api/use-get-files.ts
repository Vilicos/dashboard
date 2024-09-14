import { useQuery } from "@tanstack/react-query";
import instance from "./instance";

interface GetFiles  {
    count:number;
    next:null;
    previous:null;
    results: [
      {
        id:number;
        name:string;
        file:string;
      }
    ]
  }

type IProps = string | undefined;


export const fetchGetFiles = async () => {
  const response = await instance.get<GetFiles>("/api/company/files");
  return response.data;
};

export const useGetFiles = (parameters:IProps) =>
  useQuery({
    queryKey: ["getFiles",parameters],
    retry: 0,
    queryFn: fetchGetFiles,
    placeholderData: (previousData) => previousData,
    staleTime: 10 * (60 * 1000), //10 mins
    enabled:!!parameters
  });
