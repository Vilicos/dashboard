import { Button } from "@components/ui/button";
import { LogOut } from "lucide-react";
import { useSign } from "@/api/use-sign";

function Logout() {
    const {logOut } = useSign()
  return (
    <div className="size-5 ml-auto">
      <Button onClick={logOut} variant={"ghost"} className="p-0 h-auto hover:bg-transparent hover:text-brand-secondary text-border">
        <LogOut size={20} />
      </Button>
    </div>
  );
}

export default Logout;
