import { Button } from "@components/ui/button";
import EditBot from "./edit-bot";
import { botList } from "@constants/static-data";
import { useInviteBot } from "@/api/use-invite-bot";

interface IProps {
  type: "discord" | "telegram" | "webchat"
}

function BotItem({type }: IProps) {
  const {active,enable,img,name} = botList[type]
  const {mutate:inviteDiscord} = useInviteBot()

  const inviteBot = ()=>{
    inviteDiscord(undefined,{onSuccess(data) {
        if(!data.data.result) return;
        window.open(data.data.result,"_blank")
    },})
  }
  return (
    <div className="bg-card h-[180px] border rounded-lg basis-1/3 overflow-hidden p-7 flex flex-col items-center justify-center">
      <img src={img} alt={name} className="size-10 rounded-full object-cover bg-primary" />
      <p className="font-semibold mt-2 mb-5">{name}</p>
      {active ? (
        <EditBot>
          <Button className="h-8 w-[90px] rounded-lg font-normal" variant={'brand'}>Edit</Button>
        </EditBot>
        
      ) : (
        <Button onClick={inviteBot} className={`${enable ? "bg-primary hover:bg-brand-secondary" : "bg-muted pointer-events-none opacity-50"} rounded-lg h-8 w-[90px] text-sm`}>
          {
            enable ? "Activate": "Soon"
          }
        </Button>
      )}
    </div>
  );
}

export default BotItem;
