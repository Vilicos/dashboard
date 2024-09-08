import LogoWrapper from "@components/shared/logo-wrapper";
import type { ReactNode } from "react";


function AuthWrapper({children}:{children:ReactNode}) {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="absolute top-8 left-10">
        <LogoWrapper />
      </div>
        {children}
    </main>
  );
}

export default AuthWrapper;
