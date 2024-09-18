import BotItem from "./bot-item"

function BotCards() {
  return (
    <section className="flex items-center gap-x-[60px]">
        <BotItem type="discord"/>
        <BotItem type="telegram"/>
        <BotItem type="webchat"/>
    </section>
  )
}

export default BotCards