import LogoWrapper from "@components/shared/logo-wrapper";
import AuthComponent from "./auth-component";


function AuthPage() {
  return (
    <main className="min-h-dvh flex items-center justify-center">
      <div className="absolute top-8 left-10">
        <LogoWrapper />
      </div>
        <AuthComponent />
    </main>
  );
}

export default AuthPage;
