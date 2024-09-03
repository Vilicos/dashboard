import * as React from "react";
import { format, subDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ToggleGroup, ToggleGroupItem } from "@components/ui/toggle-group";
import { useInsightDate } from "@store/use-insights-date";

function InsightsDatePicker({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });
  const {date:insightDate,setDate:setInsightDate} = useInsightDate(state=>state)


  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"outline"} className={cn("w-fit justify-center text-left font-medium text-sm h-9 rounded-lg px-3", !date && "text-muted-foreground")}>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} - {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon className="ml-2 h-4 w-4 text-secondary" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 grid grid-cols-[150px_1fr]" align="start">
          <div className="py-4 px-3 flex flex-col h-full">
            <ToggleGroup type="single" className="flex-col items-start" onValueChange={setInsightDate} defaultValue={insightDate}>
              <ToggleGroupItem value="today" aria-label="Toggle Today" className="data-[state=on]:bg-primary hover:data-[state=on]:bg-primary hover:bg-background rounded-lg w-fit h-9 justify-start hover:text-foreground">
                Today
              </ToggleGroupItem>
              <ToggleGroupItem value="yesterday" aria-label="Toggle Yesterday" className="data-[state=on]:bg-primary hover:data-[state=on]:bg-primary hover:bg-background rounded-lg w-fit h-9 justify-start hover:text-foreground">
                Yesterday
              </ToggleGroupItem>
              <ToggleGroupItem value="lastWeek" aria-label="Toggle Last Week" className="data-[state=on]:bg-primary hover:data-[state=on]:bg-primary hover:bg-background rounded-lg w-fit h-9 justify-start hover:text-foreground">
                Last week
              </ToggleGroupItem>
              <ToggleGroupItem value="lastMonth" aria-label="Toggle Last Month" className="data-[state=on]:bg-primary hover:data-[state=on]:bg-primary hover:bg-background rounded-lg w-fit h-9 justify-start hover:text-foreground">
                Last month
              </ToggleGroupItem>
              <ToggleGroupItem value="lastQuarter" aria-label="Toggle Last Quarter" className="data-[state=on]:bg-primary hover:data-[state=on]:bg-primary hover:bg-background rounded-lg w-fit h-9 justify-start hover:text-foreground">
                Last quarter
              </ToggleGroupItem>
            </ToggleGroup>
            <Button variant={'ghost'} className="text-primary font-semibold bg-transparent hover:text-primary w-fit py-0 h-9 mt-auto">
              Reset
            </Button>
          </div>
          <Calendar 
          initialFocus 
          mode="range" 
          defaultMonth={date?.from} 
          selected={date} 
          onSelect={setDate} 
          numberOfMonths={1} 
          toDate={date?.to} 
          fromDate={date?.from} 
          />
          
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default InsightsDatePicker;
