import Title from "@components/shared/title"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
    <Title content="Not Found"/>
    <section className="rounded-md w-fit container py-28 bg-background/50">
      <div className="mx-auto max-w-md text-center">
        <img src="/svg/not-found.svg" alt="Not Found" className="object-contain w-[131px] h-[129]" />
        <h1 className="mt-8 text-3xl font-bold text-foreground sm:text-xl">Sorry, Page Not Found</h1>
        <Link
            to="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 mt-8"
          >
            Go to dashboard
          </Link>
      </div>
    </section>
    </>
  )
}