import SearchFilter from "@components/shared/search-filter";
import Title from "@components/shared/title";
import PoolTable from "./components";

function Pools() {
  return (
    <>
      <Title title="Pools" />
      <div className="flex items-center justify-between my-4">
        <h1 className="font-medium text-2xl px-4 py-1 inline-block rounded-md border bg-card shadow-md">Pools</h1>
        <SearchFilter />
      </div>
     <PoolTable/>
    </>
  );
}

export default Pools;
