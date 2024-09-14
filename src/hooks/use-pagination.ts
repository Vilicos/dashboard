import { useMemo, useState } from 'react';

interface UsePaginationProps<T> {
  data: Array<T>;
  perPage: number;
  range?: number; 
}

interface UsePaginationResult<T> {
  paginatedData: Array<T>;
  previousPage: () => void;
  nextPage: () => void;
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  pageRange: Array<string | number>;
  totalData:number;
  endItemIndex:number;
  startItemIndex:number;
  hasNextPage:boolean;
  hasPreviousPage:boolean
}

function usePagination<T>({ data, perPage,}: UsePaginationProps<T>): UsePaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => Math.ceil(data.length / perPage), [data.length, perPage]);
  const totalData = data.length
  const startItemIndex = (currentPage - 1) * perPage + (totalData > 0 ? 1:0);
  const endItemIndex = Math.min(startItemIndex + perPage - 1, data.length);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * perPage;
    return data.slice(startIndex, startIndex + perPage);
  }, [data, currentPage, perPage]);

  const pageRange = useMemo(() => {
    if (totalPages <= 6) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  }, [currentPage, totalPages]);

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const previousPage = () => {
    if (hasPreviousPage) {
      setCurrentPage((previous) => Math.max(previous - 1, 1));
    }
  };

  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage((previous) => Math.min(previous + 1, totalPages));
    }
  };

  const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return {
    paginatedData,
    previousPage,
    nextPage,
    currentPage,
    totalPages,
    setPage,
    pageRange,
    totalData,
    startItemIndex,
    endItemIndex,
    hasPreviousPage,
    hasNextPage
  };
}

export default usePagination;
