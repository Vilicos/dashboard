import RemoveDialog from "@components/shared/remove-dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { TableRow, TableCell } from "@components/ui/table";
import { UserRole } from "@custom-types/index";

interface IProps {
  fullName: string;
  email: string;
  role: `${UserRole}`;
}
function TeamItem({ email, fullName, role }: IProps) {
  
  return (
    <TableRow className="hover:bg-background group border-none">
      <TableCell className="font-medium group-hover:rounded-l-lg truncate max-w-[100px]">{fullName}</TableCell>
      <TableCell className="font-medium truncate max-w-[100px]">{email}</TableCell>
      <TableCell>
        <Select defaultValue={role}>
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
      <TableCell className="group-hover:rounded-r-lg ml-3 min-w-[56px]">
        {
            role === UserRole.Member && <RemoveDialog type="member"/>
        }
      </TableCell>
    </TableRow>
  );
}

export default TeamItem;
