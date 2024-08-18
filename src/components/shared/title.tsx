import { Helmet } from "react-helmet-async"

function Title({content}:{content:string}) {
  return (
    <Helmet>
      <title>{content}</title>
    </Helmet>
  )
}

export default Title