import { ReactECharts, type EChartsOption } from "@components/shared/custom-chart"
import { useInsightDate } from "@store/use-insights-date";
import { format } from "date-fns";

function InsightsChart() {
  const dataset1 = [
    { timestamp: 1722460800, value: 45 },
    { timestamp: 1722547200, value: 50 },
    { timestamp: 1722633600, value: 55 },
    { timestamp: 1722720000, value: 60 },
    { timestamp: 1722806400, value: 65 },
    { timestamp: 1722892800, value: 70 },
    { timestamp: 1722979200, value: 75 },
    { timestamp: 1723065600, value: 80 },
    { timestamp: 1723152000, value: 85 },
    { timestamp: 1723238400, value: 90 },
    { timestamp: 1723324800, value: 95 },
    { timestamp: 1723411200, value: 100 },
    { timestamp: 1723497600, value: 105 },
    { timestamp: 1723584000, value: 110 },
    { timestamp: 1723670400, value: 115 },
    { timestamp: 1723756800, value: 120 },
    { timestamp: 1723843200, value: 125 },
    { timestamp: 1723929600, value: 130 },
    { timestamp: 1724016000, value: 135 },
    { timestamp: 1724102400, value: 140 },
    { timestamp: 1724188800, value: 145 },
    { timestamp: 1724275200, value: 150 },
    { timestamp: 1724361600, value: 155 },
    { timestamp: 1724448000, value: 160 },
    { timestamp: 1724534400, value: 165 },
    { timestamp: 1724620800, value: 170 },
    { timestamp: 1724707200, value: 175 },
    { timestamp: 1724793600, value: 180 },
    { timestamp: 1724880000, value: 185 },
    { timestamp: 1724966400, value: 190 },
  ];
  
  const dataset2 = [
    { timestamp: 1722460800, value: 30 },
    { timestamp: 1722547200, value: 35 },
    { timestamp: 1722633600, value: 40 },
    { timestamp: 1722720000, value: 45 },
    { timestamp: 1722806400, value: 50 },
    { timestamp: 1722892800, value: 55 },
    { timestamp: 1722979200, value: 60 },
    { timestamp: 1723065600, value: 65 },
    { timestamp: 1723152000, value: 70 },
    { timestamp: 1723238400, value: 75 },
    { timestamp: 1723324800, value: 80 },
    { timestamp: 1723411200, value: 85 },
    { timestamp: 1723497600, value: 90 },
    { timestamp: 1723584000, value: 95 },
    { timestamp: 1723670400, value: 100 },
    { timestamp: 1723756800, value: 105 },
    { timestamp: 1723843200, value: 110 },
    { timestamp: 1723929600, value: 115 },
    { timestamp: 1724016000, value: 120 },
    { timestamp: 1724102400, value: 125 },
    { timestamp: 1724188800, value: 130 },
    { timestamp: 1724275200, value: 135 },
    { timestamp: 1724361600, value: 140 },
    { timestamp: 1724448000, value: 145 },
    { timestamp: 1724534400, value: 150 },
    { timestamp: 1724620800, value: 155 },
    { timestamp: 1724707200, value: 160 },
    { timestamp: 1724793600, value: 165 },
    { timestamp: 1724880000, value: 170 },
    { timestamp: 1724966400, value: 175 },
  ];
  
  const insightDate = useInsightDate(state=> state.date)
  
  const chartOption:EChartsOption = {
    color: ["#0052FE", "#CCDCFF"],
    legend: {
      show: true,
      align: "left",
      icon: "roundRect",
      top: 10,
      itemGap: 20,
      textStyle: {
        fontSize: "12px",
        fontWeight: "400",
        color: "#EFF4FF",
        fontFamily: "Inter Variable,sans-serif",
      },
    },
    tooltip: {
      backgroundColor: "#1B273E",
      borderColor: "#32466D",
      axisPointer: {
        type: "shadow",
      },
      textStyle: {
        color:"#EFF4FF",
        fontFamily: "Inter Variable,sans-serif",
        fontWeight: "400",
      },
      trigger: "axis",
      // eslint-disable-next-line unicorn/prevent-abbreviations, @typescript-eslint/no-explicit-any
      formatter(params: any) {
        const [{ data: [timestamp] }] = params;
        const date = timestamp * 1000;
        const formattedDate = format(date, "LLL dd, y");
        
        let content = `${formattedDate}<br/>`;
      
        for (const { marker, seriesName, value } of params) {
          content += `
            <div style="display: flex; justify-content: space-between; gap: 12px; width: 150px; font-weight: medium;margin-top:4px">
              <div>${marker}${seriesName}:</div>
              <div>${value[1]}</div>
            </div>`;
        }
      
        return content;
      },
    },
    xAxis: {
      type: "category",
      axisLabel: {
        fontSize: 12,
        margin: 8,
        color:"#EFF4FF",
        fontFamily: "Inter Variable,sans-serif",
        align: "center",
        hideOverlap:true,
        showMinLabel: true,
        interval:13,
        formatter:(value)=> {return format(Number(value) * 1000,"LLL d")}
      },
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 12,
        fontFamily: "Inter Variable,sans-serif",
        margin: 12,
        color:"#EFF4FF"
      },
    },
    series: [
      {
        name: "Questions",
        type: "bar",
        data: dataset1.map((item) => [item.timestamp, item.value]),
      },
      {
        name: "Answers",
        type: "bar",
        data: dataset2.map((item) => [item.timestamp, item.value]),
      },
    ],
    grid: {
      show: false,
      top: 60,
      left: 35,
      right: 10,
      bottom:25
    },
  };

  return (
    <section className="bg-card rounded-lg border p-3 basis-1/2 h-[400px]">
        <ReactECharts option={chartOption}/>
    </section>
  )
}

export default InsightsChart