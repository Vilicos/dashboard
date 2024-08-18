import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import OrganizationCard from "./organization-card";
import LogoWrapper from "./logo-wrapper";
const loadFeatures = await import("@constants/animations");

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <Header>
        <LogoWrapper />
        <OrganizationCard />
        <Navbar/>
      </Header>
      <main className="">
        <AnimatePresence>
          <LazyMotion features={loadFeatures.default}>
            <m.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.7, ease: "backInOut" } }} exit={{ opacity: 0 }}>
              <Outlet />
            </m.div>
          </LazyMotion>
        </AnimatePresence>
      </main>
    </>
  );
}

export default Layout;
