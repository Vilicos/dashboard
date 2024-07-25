import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import SearchBar from "./search-bar";
import SettingsButton from "./settings-button";
import AuthButtons from "./auth-button";
import Footer from "./footer";
import Navbar from "./navbar";
import {AnimatePresence, LazyMotion, m } from "framer-motion";
const loadFeatures = await import("@constants/animations")

function Layout() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Header>
        <SearchBar />
        <div className="flex items-center gap-x-3">
          <SettingsButton />
          <AuthButtons />
        </div>
      </Header>
      <Navbar />
      <main className="pt-24 pb-3 min-h-[calc(100dvh_-_40px)] container">
        <AnimatePresence>
          <LazyMotion features={loadFeatures.default}>
            <m.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.7, ease: "backInOut" } }} exit={{ opacity: 0 }}>
              <Outlet />
            </m.div>
          </LazyMotion>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
