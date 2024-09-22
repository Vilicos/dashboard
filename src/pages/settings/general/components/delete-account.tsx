import { useGetCompany } from "@/api/use-get-company";
import { Button } from "@components/ui/button"
import { useCookies } from "react-cookie";
function DeleteAccount() {
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess } = useGetCompany(cookies.refreshToken);
  return (
    <Button variant={'ghost'} disabled={isPending || (isSuccess && data.results.user_type === "member")} className="text-[#C70000] hover:text-[#FF5151] rounded-xl" type="button">Delete Account</Button>
  )
}

export default DeleteAccount