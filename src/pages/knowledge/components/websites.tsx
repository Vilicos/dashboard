import usePagination from "@hooks/use-pagination";
import WebsitesAdd from "./websites-add";
import WebsiteItem from "./websites-item";
import CustomPagination from "@components/shared/custom-pagination";
import { useCookies } from "react-cookie";
import { useGetWebsites } from "@/api/use-get-websites";

function Websites() {
  // const array = [...Array.from({ length: 1 }).keys()];
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess } = useGetWebsites(cookies.refreshToken);
  const { paginatedData, pageRange, nextPage, previousPage, setPage, currentPage, totalData, endItemIndex, startItemIndex, hasNextPage, hasPreviousPage } = usePagination({
    data: isSuccess ? data?.results : [],
    perPage: 5,
  });
  return (
    <section className="border pl-5 py-5 pr-3 bg-card rounded-lg flex items-start gap-x-3 mb-8">
      <img src="/svg/website.svg" alt="Website" className="pointer-events-none size-7 shrink-0" />
      <div className="w-full">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="font-bold text-xl">Websites</h2>
            <p className="font-medium text-sm mt-1">Let AI agent use any public website.</p>
          </div>
          <WebsitesAdd />
        </div>
        <div className="space-y-2 [&>*:nth-child(odd)]:bg-transparent [&>*:nth-child(even)]:bg-background">
          {!isPending &&
            isSuccess &&
            data &&
            paginatedData.map((item) => <WebsiteItem key={item.id} id={item.id} name={item.name} modified={item.modified} source_count={item.source_count} />)}
        </div>
        <CustomPagination
          pageRange={pageRange}
          nextPage={nextPage}
          className="mt-6"
          previousPage={previousPage}
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
  );
}

export default Websites;
