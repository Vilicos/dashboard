import { useEffect, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";

const AnimatedOutlet = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

function Layout() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <main className="container bgGradient">
        <AnimatedOutlet />
      </main>
    </>
  );
}

export default Layout;
