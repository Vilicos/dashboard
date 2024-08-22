import { Table, TableBody, TableHead, TableHeader, TableRow } from "@components/ui/table";
import TeamItem from "./team-item";

function TeamCard() {
  return (
    <div className="bg-card rounded-lg border pb-5 relative">
      <Table className="mx-5 w-[calc(100%_-_40px)]">
        <TableHeader>
          <TableRow className="hover:bg-transparent !border-none after:absolute after:h-px after:w-full after:top-11 after:left-0 after:bg-border">
            <TableHead className="w-1/3">Full Name</TableHead>
            <TableHead className="w-1/3">Email</TableHead>
            <TableHead className="w-1/3">Role</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          <TeamItem fullName="Nijat Hamid" email="nicatorium@gmail.com" role='admin'/>
          <TeamItem fullName="Orkhan Aslanov" email="orkhan@vilicos.com" role='member'/>
        </TableBody>
      </Table>
    </div>
  );
}

export default TeamCard;
