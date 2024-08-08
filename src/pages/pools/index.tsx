import Title from "@components/shared/title";
import PoolTable from "./components";

function Pools() {
  return (
    <>
      <Title title="Pools" />
      <h1 className="font-medium text-2xl px-4 py-1 inline-block rounded-md border bg-card shadow-md mt-4">Pools</h1>
     <PoolTable/>
    </>
  );
}

export default Pools;
