import PageHeading from "@components/shared/page-heading"
import BotCards from "./components/bot-cards"
import Title from "@components/shared/title"

function Bots() {
  return (
    <>
    <Title content="Bots"/>
    <PageHeading heading="Bots Configuration" description="Invite and manage bots."/>
    <BotCards/>
    </>
  )
}

export default Bots