import Title from "@components/shared/title";
import WidgetTest from "./components/widgets/widget-test";
import { DataTableDemo } from "./components/coin-list";
function Overview() {
  return (
    <div className="">
      <Title title="Lazarus Project" />
      <div className="flex items-center snap-x snap-mandatory flex-nowrap overflow-x-auto gap-x-3">
        <WidgetTest/>
        <WidgetTest/>
        <WidgetTest/>
      </div>
      <DataTableDemo/>
    </div>
  );
}

export default Overview;
