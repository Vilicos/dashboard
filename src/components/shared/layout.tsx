import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import SearchBar from "./search-bar";
import SettingsButton from "./settings-button";
import AuthButtons from "./auth-button";
import Footer from "./footer";

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
    <Header>
      <SearchBar/>
      <div className="flex items-cente gap-x-3">
        <SettingsButton/>
        <AuthButtons/>
      </div>
    </Header>
      <main className="container mt-16 mb-8">
        <Outlet />
      </main>
      <Footer/>
    </>
    
  );
}

export default Layout;
