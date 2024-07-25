import type { ISeo } from "@custom-types/component"
import { Helmet } from "react-helmet-async"

function Seo({title}:ISeo) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Seo