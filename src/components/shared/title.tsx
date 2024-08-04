import type { ITitle } from "@custom-types/component"
import { Helmet } from "react-helmet-async"

function Title({title}:ITitle) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Title