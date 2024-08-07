import Title from "@components/shared/title";
import WidgetContainer from "./components/widgets/widget-container";
import SingleWidget from "./components/widgets/single-widget";
import CoinTable from "./components/coin-list";

function Overview() {
  return (
    <>
      <Title title="Lazarus Project" />
      <h1 className="font-medium text-2xl px-4 py-1 mb-6 inline-block rounded-md border bg-card shadow-md">Cryptocurrencies</h1>
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
