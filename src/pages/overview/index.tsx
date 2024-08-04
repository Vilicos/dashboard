import Title from "@components/shared/title";
import WidgetContainer from "./components/widgets/widget-container";
import SingleWidget from "./components/widgets/single-widget";
import { CoinTable } from "./components/coin-list";
function Overview() {
  return (
    <>
      <Title title="Lazarus Project" />
      <WidgetContainer>
        <SingleWidget />
        <SingleWidget />
        <SingleWidget />
      </WidgetContainer>
      <CoinTable />
    </>
  );
}

export default Overview;
