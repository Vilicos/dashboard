import DataTable from "@components/shared/data-table"
import { columns } from "./columns"
import { CoinListWithMarketMock } from "@constants/mock-data"

function CoinTable() {
  return (
    <DataTable columns={columns} data={CoinListWithMarketMock}/>
  )
}

export default CoinTable