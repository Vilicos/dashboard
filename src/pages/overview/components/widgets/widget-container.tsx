import type { ReactNode } from "react";

function WidgetContainer({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border shadow-sm shrink-0 bg-card text-card-foreground snap-start overflow-hidden p-2 h-56 basis-full md:basis-1/2 lg:basis-1/3">{children}</div>
  );
}

export default WidgetContainer;
