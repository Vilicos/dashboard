import { useGetCompany } from "@/api/use-get-company";
import { useEffect, useState, type ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./loader";

function AuthLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { isPending, isSuccess, error } = useGetCompany(cookies.refreshToken);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  useEffect(() => {
    if (cookies.refreshToken){
      if(isPending){
        setIsAuthChecked(false);
      }else if(isSuccess){
        setIsAuthChecked(true);
        navigate("/", { replace: true });
      }else if(error.status === 404){
        setIsAuthChecked(true);
        navigate("/create-company", { replace: true })
      }else{
        setIsAuthChecked(true);
        navigate("/login", { replace: true })
      }
    }else {
      setIsAuthChecked(true);
      navigate(path === "/register" ? "/register" : "/login")
    }

  }, [cookies.refreshToken, error?.status,isPending, isSuccess, navigate, path]);

  if (!isAuthChecked) return <Loader/>
  return <>{children}</>;
}

export default AuthLayout;
