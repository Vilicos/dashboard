import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function InsightsTopSource() {
  return (
    <section className="bg-card rounded-lg border py-4 basis-1/2 h-[400px]">
      <Table className="mx-3 w-[calc(100%_-_24px)] overflow-hidden">
        <VisuallyHidden asChild>
          <TableCaption>Top Sources</TableCaption>
        </VisuallyHidden>
        <TableHeader>
          <TableRow className="hover:bg-transparent !border-none after:absolute after:h-px after:w-full after:top-8 after:left-0 after:bg-border *:h-auto *:pb-3 *:font-medium *:text-sm *:text-brand-fifth *:px-2">
            <TableHead className="w-[130px]">Top Source</TableHead>
            <TableHead className="text-right">Usage</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&>*:nth-child(even)]:bg-background [&>*:nth-child(odd)]:bg-transparent">
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
          <TableRow className="border-none *:font-medium *:text-sm *:px-2 *:h-[49px] *:py-0">
            <TableCell className="font-medium truncate max-w-[230px] rounded-l-lg">vilicos.com</TableCell>
            <TableCell className="text-right rounded-r-lg">20</TableCell>
          </TableRow>
        
         
         
        </TableBody>
      </Table>
    </section>
  );
}

export default InsightsTopSource;
