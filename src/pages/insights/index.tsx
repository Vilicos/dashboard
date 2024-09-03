import PageHeading from "@components/shared/page-heading";
import Title from "@components/shared/title";
import InsightsChart from "./components/insights-chart";
import InsightsTopSource from "./components/insights-top-source";
import InsightsInfoCards from "./components/insights-info-cards";
import InsightsTabQuestions from "./components/insights-tab-questions";
import InsightsScreenShoot from "./components/insights-screenshoot";
import InsightsShare from "./components/insights-share";
import InsightsAgentsFilter from "./components/insights-agents-filter";
import InsightsDatePicker from "./components/insights-date-picker";

function Insights() {
  return (
    <>
      <Title content="Insights" />
      <div className="flex items-start justify-between">
        <div>
          <PageHeading heading="Insights" description="Track your agents’ performance and improve your knowledge base." />
        </div>
        <div className="flex items-center gap-x-5"> 
            <InsightsAgentsFilter/>
            <InsightsDatePicker/>
            <InsightsScreenShoot/>
            <InsightsShare/>
        </div>
      </div>
      <InsightsInfoCards />
      <div className="flex items-center gap-x-4 justify-between my-5">
        <InsightsChart />
        <InsightsTopSource />
      </div>
      <InsightsTabQuestions/>
    </>
  );
}

export default Insights;
