import CustomPagination from "@components/shared/custom-pagination";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@components/ui/sheet";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@components/ui/table";
import { TabsContent } from "@components/ui/tabs";
import usePagination from "@hooks/utils/use-pagination";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronRight } from "lucide-react";

function InsightsTabAgentHistory() {
  const array = [...Array.from({ length: 10 }).keys()];
  const { paginatedData, pageRange, nextPage, previousPage, setPage, currentPage, totalData, endItemIndex, startItemIndex, hasNextPage, hasPreviousPage } = usePagination({
    data: array,
    perPage: 5,
  });
  return (
    <TabsContent value="agentHistory" className="mt-">
      <Table className="mx-3 w-[calc(100%_-_24px)] overflow-hidden table-fixed">
        <VisuallyHidden asChild>
          <TableCaption>Agent History</TableCaption>
        </VisuallyHidden>
        <TableHeader>
          <TableRow className="hover:bg-transparent !border-none after:absolute after:h-px after:w-full after:top-8 after:left-0 after:bg-border *:h-auto *:pb-3 *:font-medium *:text-sm *:text-brand-fifth *:px-4">
            <TableHead className="w-[130px]">Source</TableHead>
            <TableHead className="text-left w-1/2">Questions</TableHead>
            <TableHead className="text-right w-1/2">Date</TableHead>
            <TableHead className="text-right w-64"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&>*:nth-child(even)]:bg-background [&>*:nth-child(odd)]:bg-transparent">
          {paginatedData.map((item) => (
            <TableRow className="border-none *:font-medium *:text-sm *:px-4 *:h-[49px] *:py-0" key={item}>
              <TableCell className="truncate rounded-l-lg">Discord</TableCell>
              <TableCell className="text-left truncate ">Why I can’t add this? when I’ll can add this?</TableCell>
              <TableCell className="text-right ">21.07.2024, 14.35</TableCell>
              <TableCell className="text-right rounded-r-lg">
                <Sheet>
                  <SheetTrigger className="flex items-center ml-auto gap-x-1 font-medium text-primary">
                    Details <ChevronRight size={14} />
                  </SheetTrigger>
                  <SheetContent closeClassName="top-[22px]" className="data-[state=open]:bg-card rounded-lg sm:max-w-[600px] py-4 px-6 ">
                    <SheetHeader>
                      <SheetTitle className="font-medium text-xl">Details</SheetTitle>
                      <SheetDescription></SheetDescription>
                    </SheetHeader>
                    <ul className="*:text-sm *:font-medium *:text-secondary space-y-8 mt-9">
                      <li>
                        Source: <span className="text-base text-foreground pl-3">Discord</span>
                      </li>
                      <li>
                        User: <span className="text-base text-foreground pl-3">parviz19</span>
                      </li>
                      <li>
                        Question: <span className="text-base text-foreground pl-3">Why i can’t add this?</span>
                      </li>
                      <li>
                        Answer: <span className="text-base text-foreground pl-3">You don’t have an access to do this.</span>
                      </li>
                      <li className="flex items-center gap-x-2">
                        Feedback:{" "}
                        <span className="text-base text-foreground inline-block overflow-hidden">
                          <img src="/img/upvote.png" alt="Upvote" className="size-5" />
                        </span>
                      </li>
                      <li>
                        Used Knowledge: <span className="text-base text-foreground pl-3">vilicos.com/</span>
                      </li>
                    </ul>
                  </SheetContent>
                </Sheet>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomPagination
        pageRange={pageRange}
        nextPage={nextPage}
        previousPage={previousPage}
        setPage={setPage}
        className="pl-4 mt-3"
        currentPage={currentPage}
        totalData={totalData}
        endItemIndex={endItemIndex}
        startItemIndex={startItemIndex}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </TabsContent>
  );
}

export default InsightsTabAgentHistory;
