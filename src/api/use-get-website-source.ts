import { useQuery } from "@tanstack/react-query";
import instance from "./instance";

interface GetWebsitesSource {
  results: [
    {
      id: number;
      link: string;
      content:string;
      created:string;
      modified:string;
    }
  ];
}

type IProps = string | undefined;

export const fetchGetWebsitesSource = async (id:number|undefined) => {
  const response = await instance.get<GetWebsitesSource>(`/api/company/website/${id}/sources`);
  return response.data;
};

export const useGetWebsitesSource = (parameters: IProps,id:number) =>
  useQuery({
    queryKey: ["getWebsitesSource",parameters,id],
    retry: 0,
    queryFn: ()=> fetchGetWebsitesSource(id),
    placeholderData: (previousData) => previousData,
    staleTime: 10 * (60 * 1000), //10 mins
    enabled: !!parameters && !!id,
  });
