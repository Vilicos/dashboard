import { Button } from "@components/ui/button";
import { useNavigate, useRouteError } from "react-router-dom"

export default function ErrorRoute({ parent = false }: { parent?: boolean }) {
  const error = useRouteError() as Error;
  const navigate = useNavigate()
  return (
    <section className={`rounded-md w-fit container py-12 border bg-background/50 overflow-hidden ${parent && 'relative top-12'}`}>
      <div className="mx-auto max-w-md text-center">
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          {
            parent ? "Oops, app crashed!":"Oops, something went wrong!"
          }
          </h1>
        <p className="mt-4 text-muted-foreground line-clamp-2">
        {error.message}
        </p>
          <Button
          onClick={()=> navigate(0)}
            className="mt-6"
          >
            Refresh Page
          </Button>
      </div>
    </section>
  )
}