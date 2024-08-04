import type { ReactNode } from "react";

function WidgetContainer({ children }: { children: ReactNode }) {
  return <div className="flex items-center snap-x snap-mandatory flex-nowrap overflow-x-auto gap-x-3">{children}</div>;
}

export default WidgetContainer;
