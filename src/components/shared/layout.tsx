import { Outlet, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import Header from "./header";
import Navbar from "./navbar";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import OrganizationCard from "./organization-card";
import LogoWrapper from "./logo-wrapper";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
const loadFeatures = () => import("@constants/animations").then((response) => response.default);

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  const [cookies] = useCookies(["refreshToken", "accessToken"]);

  // Auth Logic

  useEffect(() => {
    if (!cookies.refreshToken) return navigate("/login", { replace: true });
  }, [cookies.refreshToken, navigate, path]);

  return (
    <>
      <div className="grid grid-cols-[220px_1fr]">
        <Header>
          <LogoWrapper />
          <OrganizationCard />
          <Navbar />
        </Header>
        <main className="min-h-dvh pt-12 container pb-6 screenshoot">
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
