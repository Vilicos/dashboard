import type { ReactNode } from "react";

function Header({ children }: { children: ReactNode }) {
  return (
    <header className="fixed inset-0 z-10 bg-card/80 w-full h-16 border-b shadow-sm backdrop-blur-sm flex items-center ">
      <div className="container flex justify-between items-center">{children}</div>
    </header>
  );
}

export default Header;
