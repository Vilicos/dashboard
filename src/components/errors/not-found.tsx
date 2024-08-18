import Title from "@components/shared/title"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
    <Title content="Not Found"/>
    <section className="rounded-md w-fit container py-12 border bg-background/50">
      <div className="mx-auto max-w-md text-center">
        <h1 className="mt-4 text-3xl font-bold  text-foreground sm:text-4xl">Oops, page not found!</h1>
        <p className="mt-4 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}