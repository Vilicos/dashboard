import ArrowLeft from "@assets/icons/arrow-left";
import { Link, useParams } from "react-router-dom";
import { Table, TableBody, TableCaption, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import DetailsItem from "./components/details-item";
import usePagination from "@hooks/use-pagination";
import CustomPagination from "@components/shared/custom-pagination";
import { useGetWebsitesSource } from "@/api/use-get-website-source";
import { useCookies } from "react-cookie";

function WebsiteDetails() {
  const {id} = useParams()
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess } = useGetWebsitesSource(cookies.refreshToken,Number(id));
  const { paginatedData, pageRange, nextPage, previousPage, setPage, currentPage, totalData, endItemIndex, startItemIndex, hasNextPage, hasPreviousPage } = usePagination({
    data:  isSuccess ? data?.results : [],
    perPage: 10,
  });
  return (
    <div>
      <section className="flex items-center gap-x-3">
        <Link to="/" relative="path" className="shrink-0">
          <ArrowLeft className="stroke-[#CCDCFF] hover:stroke-brand-secondary transition-colors" />
        </Link>
        <div>
          <h1 className="font-medium text-brand-fifth">
            <Link to={"/"} className="hover:text-brand-secondary transition-colors">Knowledge Base</Link> <span className="text-foreground">/ Website Details</span>
          </h1>
        </div>
      </section>
      <section className="pb-5 bg-card rounded-lg border mt-5 relative">
        <Table className="mx-4 w-[calc(100%_-_32px)] table-fixed">
          <VisuallyHidden asChild>
            <TableCaption></TableCaption>
          </VisuallyHidden>
          <TableHeader>
            <TableRow className="*:h-16 *:text-sm *:font-medium *:text-brand-fifth hover:bg-transparent !border-none after:absolute after:h-px after:w-full after:top-14 after:left-0 after:bg-border *:overflow-hidden w-full ">
              <TableHead className="w-1/2">Source</TableHead>
              <TableHead className="w-1/2">Last Update</TableHead>
              <TableHead className="text-right w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(even)]:bg-background [&>*:nth-child(odd)]:bg-transparent">
            {!isPending &&
            isSuccess &&
            data &&
            paginatedData.map((item) => <DetailsItem key={item.id} id={item.id} name={item.link} modified={item.modified} content={item.content} />)}
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
