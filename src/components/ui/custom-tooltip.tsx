import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { ITooltip } from "@custom-types/index";
import React from "react";

const CustomTooltip = React.forwardRef<HTMLDivElement, ITooltip>(({ children, content, delay = 200, position = "top", contentClass,triggerClass,sideOffSet = 5 }, ref) => (
  <TooltipProvider delayDuration={delay}>
    <Tooltip>
      <TooltipTrigger asChild className={triggerClass}>
        <span>{children}</span>
      </TooltipTrigger>
      <TooltipContent sideOffset={sideOffSet} side={position} className="rounded-lg" ref={ref}>
        <p className={contentClass}>{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
));

CustomTooltip.displayName = "CustomTooltip";

export default CustomTooltip;
