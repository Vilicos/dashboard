import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Separator } from "@components/ui/separator";
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
            role === UserRole.Member &&  <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="bg-input size-6 p-0 hover:bg-brand-dest-secondary">
                <img src="/svg/remove.svg" alt="Remove" className="w-[10] h-3 pointer-events-none" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-card max-w-[332px] p-4">
              <AlertDialogHeader>
                <AlertDialogTitle className="font-bold text-xl">Remove Member</AlertDialogTitle>
                <Separator />
                <AlertDialogDescription className="!my-5 text-center">Are you sure to remove this user?</AlertDialogDescription>
                <Separator />
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-secondary hover:bg-brand-fifth transition-colors rounded-xl font-semibold w-[90x] h-9">Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-brand-dest-secondary hover:bg-destructive transition-colors rounded-xl font-semibold w-[90x] h-9">Remove</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        }
       
      </TableCell>
    </TableRow>
  );
}

export default TeamItem;
