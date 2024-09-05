import { Button } from "@components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorRoute() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  return (
    <section className={`py-12 bg-background/50 overflow-hidden mx-auto max-w-md text-center`}>
      <img src="/svg/error-image.svg" alt="Error" className="size-[280px] object-cover" />
        <h1 className="mt-8 font-bold sm:text-xl"><span className="text-primary">Oops,</span>{" "}Something Went Wrong</h1>
        <p className="mt-4 text-muted-foreground line-clamp-2">{error.message}</p>
        <Button onClick={() => navigate(0)} className="mt-6">
          Refresh Page
        </Button>
    </section>
  );
}
