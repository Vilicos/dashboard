import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import OrganizationCard from "./organization-card";
import LogoWrapper from "./logo-wrapper";
const loadFeatures = () => import("@constants/animations").then((response) => response.default);

function Layout() {
  const location = useLocation();
  return (
    <>
      <div className="grid grid-cols-[220px_1fr]">
        <Header>
          <LogoWrapper />
          <OrganizationCard />
          <Navbar />
        </Header>
        <main className="min-h-dvh pt-12 container pb-6">
          <AnimatePresence>
            <LazyMotion features={loadFeatures}>
              <m.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.7, ease: "backInOut" } }} exit={{ opacity: 0 }}>
                <Outlet />
              </m.div>
            </LazyMotion>
          </AnimatePresence>
        </main>
      </div>
      <ScrollRestoration />
    </>
  );
}

export default Layout;
