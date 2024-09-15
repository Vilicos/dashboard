import { useGetCompany } from "@/api/use-get-company";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { useCookies } from "react-cookie";
import { BeatLoader } from "react-spinners";
import Logout from "./logout";

function OrganizationCard() {
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isSuccess, isError } = useGetCompany(cookies.refreshToken);

  return (
    <div className="border rounded-lg py-2 pl-3 pr-2 flex gap-x-2 items-center h-10 overflow-hidden mt-7 mb-11 w-full">
      {isSuccess && data && !isError ? (
        <>
          <Avatar className="size-6 overflow-hidden shrink-0">
            <AvatarImage src={data.results.logo ?? ""} className="object-cover inline-block" alt="Nijat Hamid" />
            <AvatarFallback className="bg-background border"></AvatarFallback>
          </Avatar>
          <span className="truncate font-semibold">{data.results.name}</span>
          <Logout/>
        </>
      ) : (
        <BeatLoader size={10} color="#32466D" className="mx-auto"/>
      )}
    </div>
  );
}

export default OrganizationCard;
