import PageHeading from "@components/shared/page-heading"
import CompanyDetail from "./components/company-detail"
import Title from "@components/shared/title"


function General() {
  return (
    <>
    <Title content="General"/>
    <PageHeading heading="General" description="Change logo and name."/>
    <CompanyDetail/>
    </>
  )
}

export default General