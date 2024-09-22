import { useQuery } from "@tanstack/react-query";
import instance from "./instance";
import type { UserRole } from "@custom-types/index";


interface GetCompany  {
    results: {
      name: string;
      logo: string | null;
      modified:string;
      created:string;
      id:number;
      full_name:string;
      user_type:`${UserRole}`
    };
  }

type IProps = string | undefined;



export const fetchGetCompany = async () => {
  const response = await instance.get<GetCompany>("/api/company");
  return response.data;
};

export const useGetCompany = (parameters:IProps) =>
  useQuery({
    queryKey: ["getCompany",parameters],
    retry: 0,
    queryFn: fetchGetCompany,
    enabled:!!parameters
  });
