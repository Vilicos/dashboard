import Title from "@components/shared/title";

import SearchFilter from "@components/shared/search-filter";
import GridProtocolCard from "./components/grid-protocol-card";

function Protocols() {
  return (
    <>
      <Title title="Protocols" />
      <div className="flex items-center justify-between my-4">
        <h1 className="font-medium text-2xl px-4 py-1 inline-block rounded-md border bg-card shadow-md">Protocols</h1>
        <SearchFilter />
      </div>
      <GridProtocolCard/>
    </>
  );
}

export default Protocols;
