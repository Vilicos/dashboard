import type { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="fixed container z-10 h-16 top-0 left-[calc(100vw_-_100%)] right-0">
      <div className="flex items-center justify-between bg-card w-full h-[inherit] shadow-md border-b backdrop-blur-sm rounded-b-md p-3">{children}</div>
    </header>
  );
}

export default Header;
