import type { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="fixed top-0 left-0 z-10 bottom-0 w-[220px] bg-card pt-7 pl-7 pr-[22px] overflow-hidden">
      {children}
    </header>
  );
}

export default Header;
