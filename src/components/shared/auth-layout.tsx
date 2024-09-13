import { useGetCompany } from "@/api/use-get-company";
import { useEffect, type ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";

function AuthLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess, isError, error } = useGetCompany(cookies.refreshToken);

  useEffect(() => {
    if (cookies.refreshToken && !isPending)
      return isSuccess ? navigate("/", { replace: true }) : (error.status === 404 ? navigate("/create-company", { replace: true }) : navigate("/login", { replace: true }));
    if (!cookies.refreshToken) return navigate(path === "/register" ? "/register" : "/login");
  }, [cookies.refreshToken, data, error?.status, isError, isPending, isSuccess, navigate, path]);

  return <>{children}</>;
}

export default AuthLayout;
