import { botList } from "@constants/static-data"
import BotItem from "./bot-item"

function BotCards() {
  const cardList = botList.map(item => <BotItem key={item.id} active={item.active} img={item.img} name={item.name} enable={item.enable} slug={item.slug}/>)
  return (
    <section className="flex items-center gap-x-[60px]">
        {cardList}
    </section>
  )
}

export default BotCards