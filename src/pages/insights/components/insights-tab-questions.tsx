import { Tabs, TabsList, TabsTrigger } from "@components/ui/tabs";
import InsightsTabAgentHistory from "./insights-tab-agent-history";

function InsightsTabQuestions() {
  return (
    <Tabs defaultValue="agentHistory" className="w-full bg-card border rounded-lg pb-4 pt-3">
      <TabsList className="w-full bg-transparent gap-x-20 !p-0 h-auto mb-2">
        <TabsTrigger
          value="agentHistory"
          className="font-medium text-base data-[state=active]:text-primary data-[state=active]:bg-transparent border-b border-transparent rounded-none !shadow-none data-[state=active]:border-primary px-0 py-0.5"
        >
          Agent History
        </TabsTrigger>
        <TabsTrigger
          disabled
          value="topAskedQuestions"
          className="font-medium text-base data-[state=active]:text-primary data-[state=active]:bg-transparent border-b border-transparent rounded-none !shadow-none data-[state=active]:border-primary px-0 py-0.5"
        >
          Top Asked Questions
        </TabsTrigger>
      </TabsList>
      <InsightsTabAgentHistory />
    </Tabs>
  );
}

export default InsightsTabQuestions;
