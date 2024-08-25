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
import { Separator } from "@components/ui/separator";
import type { removeDialogContent } from "@custom-types/index";

function RemoveDialog({type}:{type:`${removeDialogContent}`}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-input size-6 p-0 hover:bg-brand-dest-secondary rounded">
          <img src="/svg/remove.svg" alt="Remove" className="w-[10] h-3 pointer-events-none" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card max-w-[332px] p-4">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold text-xl">Remove</AlertDialogTitle>
          <Separator />
          <AlertDialogDescription className="!my-5 text-center">{`Are you sure to remove this ${type}?`}</AlertDialogDescription>
          <Separator />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-secondary hover:bg-secondary/80 transition-colors rounded-xl font-semibold w-[90x] h-9">Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-brand-dest-secondary hover:bg-destructive transition-colors rounded-xl font-semibold w-[90x] h-9">Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default RemoveDialog;
