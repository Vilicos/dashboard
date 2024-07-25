import Seo from "@components/shared/seo";
import WidgetTest from "./components/widgets/widget-test";

function Overview() {
  return (
    <div className="">
      <Seo title="Lazarus Project" />
      <div className="flex items-center snap-x snap-mandatory flex-nowrap overflow-x-auto">
        <WidgetTest/>
        <WidgetTest/>
        <WidgetTest/>
      </div>
    </div>
  );
}

export default Overview;
