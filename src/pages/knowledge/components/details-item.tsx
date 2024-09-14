import RemoveDialog from "@components/shared/remove-dialog";
import { TableCell, TableRow } from "@components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ScrollArea } from "@components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns";
function DetailsItem({ id,name,modified,content }: { id: number;name:string;modified:string;content:string }) {
  const agoDate = formatDistanceToNow(new Date(modified),{addSuffix:true})
  return (
    <TableRow className="*:font-medium *:text-sm border-none">
      <TableCell className="rounded-l-lg truncate">{name}</TableCell>
      <TableCell className="">{agoDate}</TableCell>
      <TableCell className="rounded-r-lg flex items-center gap-x-5">
        <Dialog>
          <DialogTrigger className="shrink-0 rounded bg-border size-6 flex items-center justify-center transition-colors hover:bg-brand-secondary">
            <img src="/svg/show.svg" alt="Show" className="pointer-events-none w-[18px] h-3 " />
          </DialogTrigger>
          <DialogContent className="py-4 px-6 max-w-[600px] max-h-[calc(100dvh-3.5rem)] h-[700px] bg-card">
            <DialogHeader className="after:absolute after:h-px after:w-full after:top-[52px] after:left-0 after:bg-border">
              <DialogTitle className="font-medium text-xl">Content Details</DialogTitle>
              <VisuallyHidden>
                <DialogDescription></DialogDescription>
              </VisuallyHidden>
            </DialogHeader>
            <ScrollArea type="always" className="overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-transparent pr-3">
              <p>
                {content}
              </p>
            </ScrollArea>
          </DialogContent>
        </Dialog>
        <RemoveDialog type="source" id={id} />
      </TableCell>
    </TableRow>
  );
}

export default DetailsItem;
