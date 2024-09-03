import { cn } from "@/lib/utils";
import { Button } from "@components/ui/button";
import type { PaginationProps } from "@custom-types/index";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

function CustomPagination({ pageRange, nextPage, previousPage, setPage, currentPage, totalData,endItemIndex,startItemIndex,hasNextPage,hasPreviousPage,className}: PaginationProps) {
  return (
    <div className={cn("flex items-center gap-x-3 w-full",className)}>
      <p className="shrink-0 font-medium text-sm text-secondary w-[165px] truncate">{`Showing ${startItemIndex} - ${endItemIndex} of ${totalData}`}</p>
      <Button className="p-0 size-5 bg-border/30 rounded hover:bg-background" onClick={previousPage} disabled={!hasPreviousPage}>
        <ChevronLeft size={12} />
      </Button>
      <div className="flex items-center gap-x-2">
        {pageRange.map((page) =>
          typeof page === "number" ? (
            <Button
              key={page}
              onClick={() => typeof page === "number" && setPage(page)}
              className={`p-0 size-5 rounded hover:bg-background text-xs transition-none ${page === currentPage ? "bg-primary hover:bg-brand-secondary" : "bg-border/30 hover:bg-brand-secondary"}`}
            >
              {page}
            </Button>
          ) : (
            <Ellipsis key={`${page}${Math.random()}`} className="size-4"/>
          )
        )}
      </div>
      <Button className="p-0 size-5 bg-border/30 rounded hover:bg-background" onClick={nextPage} disabled={!hasNextPage}>
        <ChevronRight size={12} />
      </Button>
    </div>
  );
}

export default CustomPagination;
