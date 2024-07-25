import { Button } from "@components/ui/button";

function AuthButtons() {
  return (
    <div className="flex items-center gap-x-3">
      <Button variant="secondary" size={"sm"}>
        Sign In
      </Button>
      <Button size={"sm"}>Sign Up</Button>
    </div>
  );
}

export default AuthButtons;
