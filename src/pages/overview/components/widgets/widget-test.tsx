import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { WidgetDateOption } from "@custom-types/component";
import { useState } from "react";

function WidgetTest() {
  const [date, setDate] = useState<WidgetDateOption>(WidgetDateOption["24h"]);
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
          <Select value={date} onValueChange={(value) => setDate(value as WidgetDateOption)}>
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
        
      </div>
    </div>
  );
}

export default WidgetTest;
