import type { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="fixed container inset-0 z-10 w-full h-16">
      <div className="flex items-center justify-between bg-card w-full h-[inherit] shadow-md border-b backdrop-blur-sm rounded-md p-3">{children}</div>
    </header>
  );
}

export default Header;
