import { Table, TableBody, TableHead, TableHeader, TableRow } from "@components/ui/table";
import TeamItem from "./team-item";
import { useCookies } from "react-cookie";
import { useGetTeamMembers } from "@/api/use-get-team-members";

function TeamCard() {
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const {data,isPending,isSuccess} = useGetTeamMembers(cookies.refreshToken)
  const teamMembers = data?.results[0]?.users

  return (
    <section className="bg-card rounded-lg border pb-5 relative">
      <Table className="mx-5 w-[calc(100%_-_40px)] table-fixed">
        <TableHeader>
          <TableRow className="hover:bg-transparent !border-none after:absolute after:h-px after:w-full after:top-11 after:left-0 after:bg-border">
            <TableHead className="w-1/3">Full Name</TableHead>
            <TableHead className="w-1/3">Email</TableHead>
            <TableHead className="w-1/3">Role</TableHead>
            <TableHead className="text-right w-14"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&>*:nth-child(even)]:bg-background [&>*:nth-child(odd)]:bg-transparent ">
          {
            !isPending &&
            isSuccess &&
            data && data.results && teamMembers && teamMembers.map(item => (<TeamItem key={item.id} id={item.id} fullName={item.full_name} email={item.email} role={item.user_type}/>)) 
          }
        </TableBody>
      </Table>
    </section>
  );
}

export default TeamCard;
