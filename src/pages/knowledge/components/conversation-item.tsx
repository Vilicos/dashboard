import { conversationData } from "@constants/static-data"
import ConversationManage from "./conversation-manage"

function ConversationItem({networkName}:{networkName:"telegram" | "discord" | "webchat"}) {
  
  const network = conversationData[networkName]
  return (
    <div className={`flex items-center justify-between px-3 py-5 rounded-lg  ${!network.isActive && "pointer-events-none opacity-50"}`}>
        <div className="flex items-center gap-x-2">
            <img src={network.logo} alt={network.title} className="w-5 h-auto shrink-0"/>
            <p className="text-sm font-medium w-[110px] truncate">{network.title}
             {
                !network.isActive && <span className="ml-2 text-xs border py-px px-1 rounded-lg">soon</span>
             }
            </p>
        </div>
        <span className="font-medium text-sm text-brand-fifth">Chat history not connected</span>
        <ConversationManage/>
    </div>
  )
}

export default ConversationItem