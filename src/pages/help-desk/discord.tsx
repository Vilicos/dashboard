import PageHeading from "@components/shared/page-heading"
import Title from "@components/shared/title"
import Chats from "./components/chats"

function Discord() {
  return (
    <>
    <Title content="Discord"/>
    <PageHeading heading="Discord" description="Unanswered questions that need your attention."/>
    <Chats/>
    </>
  )
}

export default Discord