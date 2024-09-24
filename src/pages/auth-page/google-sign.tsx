import { useSign } from "@/api/use-sign";
import { Button } from "@components/ui/button";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useRef } from "react";

type IProps = {
  type: "login" | "register";
};

function GoogleSign({ type }: IProps) {
  const { googleSign } = useSign();
    const login = useGoogleLogin({
      onSuccess: tokenResponse => googleSign.mutate(tokenResponse.access_token),
      onError: error => console.error(error)
    })
  return (
    <Button
      onClick={()=>login()}
      className={`bg-primary w-full py-[10px] px-5 rounded-lg h-auto justify-start text-base hover:bg-brand-secondary`}
    >
      <img src="/img/google.png" alt="Google" className="pointer-events-none size-6 shrink-0" />
      <span className="font-semibold ml-[62px]">
        {
            type === "login" ? "Login with Google" : "Continue with Google"
        }
      </span>
    </Button>

  );
}

export default GoogleSign;
