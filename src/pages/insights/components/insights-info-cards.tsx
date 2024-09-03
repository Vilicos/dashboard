import InsightsInfoSingle from "./insights-info-single"

function InsightsInfoCards() {
  return (
    <section className="flex items-center gap-x-2">
        <InsightsInfoSingle title="Total Questions" value="100"/>
        <InsightsInfoSingle title="Agent Answers" value="90"/>
        <InsightsInfoSingle title="Agent Resolution Rate" value="90%"/>
        <InsightsInfoSingle title="Agent Upvote Ratio" value="90%" icon/>
        <InsightsInfoSingle title="Saved Time" value="5H 20min."/>
    </section>
  )
}

export default InsightsInfoCards