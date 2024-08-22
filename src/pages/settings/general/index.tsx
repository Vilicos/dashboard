import PageHeading from "@components/shared/page-heading"
import CompanyDetail from "./components/company-detail"


function General() {
  return (
    <>
    <PageHeading heading="General" description="Change logo and name."/>
    <CompanyDetail/>
    </>
  )
}

export default General