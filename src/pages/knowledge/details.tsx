import ArrowLeft from "@assets/icons/arrow-left";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import DetailsItem from "./components/details-item";
import usePagination from "@hooks/utils/use-pagination";
import CustomPagination from "@components/shared/custom-pagination";

function WebsiteDetails() {
  const array = [...Array.from({ length: 97 }).keys()];
  const { paginatedData, pageRange, nextPage, previousPage, setPage, currentPage, totalData, endItemIndex, startItemIndex, hasNextPage, hasPreviousPage } = usePagination({
    data: array,
    perPage: 10,
  });
  return (
    <div>
      <section className="flex items-center gap-x-3">
        <Link to=".." relative="path" className="shrink-0">
          <ArrowLeft className="stroke-[#CCDCFF] hover:stroke-brand-secondary transition-colors" />
        </Link>
        <div>
          <h1 className="font-medium text-brand-fifth">
            Knowledge Base <span className="text-foreground">/ Website Details</span>
          </h1>
        </div>
      </section>
      <section className="pb-5 bg-card rounded-lg border mt-5 relative">
        <Table className="mx-4 w-[calc(100%_-_32px)] table-fixed">
          <VisuallyHidden asChild>
            <TableCaption></TableCaption>
          </VisuallyHidden>
          <TableHeader>
            <TableRow className="*:h-14 *:text-sm *:font-medium *:text-brand-fifth hover:bg-transparent !border-none after:absolute after:h-px after:w-full after:top-14 after:left-0 after:bg-border *:overflow-hidden w-full ">
              <TableHead className="w-1/2">Source</TableHead>
              <TableHead className="w-1/2">Last Update</TableHead>
              <TableHead className="text-right w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(even)]:bg-background [&>*:nth-child(odd)]:bg-transparent">
            {paginatedData.map((item) => (
              <DetailsItem key={item} id={item} />
            ))}
          </TableBody>
        </Table>
        <div className="mx-4 w-[calc(100%_-_32px)]">
          <CustomPagination
            pageRange={pageRange}
            nextPage={nextPage}
            previousPage={previousPage}
            className="mt-6"
            setPage={setPage}
            currentPage={currentPage}
            totalData={totalData}
            endItemIndex={endItemIndex}
            startItemIndex={startItemIndex}
            hasNextPage={hasNextPage}
            hasPreviousPage={hasPreviousPage}
          />
        </div>
      </section>
    </div>
  );
}

export default WebsiteDetails;
