import { useGetCompany } from "@/api/use-get-company";
import { useEffect, type ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";

function AuthLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data,isLoading,isPending } = useGetCompany(cookies.refreshToken);

  useEffect(() => {
    if(isLoading) return;
    if (cookies.refreshToken) {
      if (data?.results) {
        const { logo, name } = data.results;
        return !logo && !name ? navigate("/create-company", { replace: true }) : navigate('/',{replace:true});
      }else{
        console.log("shit")
      }
    } else {
      return navigate(path === "/register" ? "/register" : "/login");
    }
  }, [cookies.refreshToken, data, data?.results, isLoading, isPending, navigate, path]);

  return <>{children}</>;
}

export default AuthLayout;
