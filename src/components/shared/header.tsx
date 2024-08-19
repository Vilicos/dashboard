import type { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="bg-card">
      <div className="fixed top-0 left-0 z-10 w-[220px] pt-7 pl-7 pr-[22px] overflow-hidden h-full">
       {children}
      </div>
      
    </header>
  );
}

export default Header;
