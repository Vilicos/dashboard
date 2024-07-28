import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { WidgetDateOption } from "@custom-types/component";
import { useState } from "react";
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

function WidgetTest() {
  const [date, setDate] = useState<WidgetDateOption>(WidgetDateOption["24h"]);

  const selectDate = (value: WidgetDateOption) => {
    setDate(value);
  };
  return (
    <div className="shrink-0 snap-start overflow-hidden p-2 basis-full md:basis-1/2 lg:basis-1/3 h-56 ">
      <div className="p-4 bg-card text-card-foreground rounded-md border shadow-sm w-full h-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="size-6 rounded-md overflow-hidden">
              <AvatarImage src="/svg/btc.svg" alt="Bitcoin" />
              <AvatarFallback className="border bg-primary/10"></AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground ml-1.5">Bitcoin</span>
          </div>
          <Select value={date} onValueChange={selectDate}>
            <SelectTrigger className="w-fit h-6 px-1.5 rounded-[10px] text-xs overflow-hidden ">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent className="min-w-0">
              {Object.values(WidgetDateOption).map((item) => (
                <SelectItem isArrow={false} key={item} value={item} className="cursor-pointer py-0.5 justify-center rounded-[10px] text-xs">
                  {item}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <ChartContainer config={chartConfig} className="min-h-full w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 12,
              bottom:70,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={4} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
            <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.2} stroke="var(--color-desktop)" />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}

export default WidgetTest;
