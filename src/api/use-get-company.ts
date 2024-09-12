import { useQuery } from "@tanstack/react-query";
import instance from "./instance";
interface GetCompany  {
    results: {
      name: string;
      logo: string;
    };
  }

type IProps = string | undefined;



export const fetchGetCompany = async () => {
  const response = await instance.get<GetCompany>("/api/company");
  return response.data;
};

export const useGetCompany = (parameters:IProps) =>
  useQuery({
    queryKey: ["getCompany"],
    retry: 0,
    queryFn: fetchGetCompany,
    // staleTime: 10 * (60 * 1000),
    // gcTime:0,
    enabled:!!parameters
  });
