import type { ReactNode } from "react";

function WidgetContainer({ children }: { children: ReactNode }) {
  return <section className="flex items-center snap-x snap-mandatory flex-nowrap overflow-x-auto gap-x-3">{children}</section>;
}

export default WidgetContainer;
