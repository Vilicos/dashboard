import RemoveDialog from "@components/shared/remove-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { TableRow, TableCell } from "@components/ui/table";
import { UserRole } from "@custom-types/index";

interface IProps {
  fullName: string;
  email: string;
  role: `${UserRole}`;
  id:number;
}
function TeamItem({ email, fullName, role,id }: IProps) {
  
  return (
    <TableRow className="border-none">
      <TableCell className="font-medium truncate max-w-[100px] rounded-l-lg">{fullName}</TableCell>
      <TableCell className="font-medium truncate max-w-[100px]">{email}</TableCell>
      <TableCell>
        <Select defaultValue={role} disabled>
          <SelectTrigger className="w-[90px] h-7 rounded-lg pl-2 pr-1 bg-input">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent className="rounded-lg min-w-28">
            {Object.entries(UserRole).map((item) => (
              <SelectItem value={item[1]} className="cursor-pointer text-sm rounded-lg" key={item[0]}>
                {item[0]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell className="ml-3 min-w-[56px] rounded-r-lg">
          <RemoveDialog type="team" id={id} role={role}/>
      </TableCell>
    </TableRow>
  );
}

export default TeamItem;
