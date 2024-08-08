import DataTable from "@components/shared/data-table"
import { columns } from "./columns"
import { PoolData } from "@constants/mock-data"

function PoolTable(){
  return (
    <DataTable columns={columns} data={PoolData.data} searchProperty="symbol"/>
  )
}

export default PoolTable