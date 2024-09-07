import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";

function InsightsAgentsFilter() {
  return (
    <Select defaultValue="allAgents">
      <SelectTrigger iconClassName="ml-1" className="min-w-[120px] w-fit h-9 rounded-lg pr-1 font-medium text-base bg-transparent">
        <SelectValue placeholder="Channels" />
      </SelectTrigger>
      <SelectContent className="rounded-lg min-w-28">
        <SelectItem value="allAgents" className="cursor-pointer text-sm rounded-lg font-medium">
          All Agents
        </SelectItem>
        <SelectItem value="discord" className="cursor-pointer rounded-lg">
          <div className="flex items-center gap-x-2">
            <img src="/img/discord.png" alt="Discord" className="size-4 object-cover pointer-events-none overflow-hidden shrink-0" />
            <span className="font-medium text-sm">Discord</span>
          </div>
        </SelectItem>
        <SelectItem value="telegram" className="cursor-pointer rounded-lg">
          <div className="flex items-center gap-x-2">
            <img src="/img/telegram.png" alt="Discord" className="size-4 object-cover pointer-events-none overflow-hidden shrink-0" />
            <span className="font-medium text-sm">Telegram</span>
          </div>
        </SelectItem>
        <SelectItem value="webchat" className="cursor-pointer rounded-lg">
          <div className="flex items-center gap-x-2">
            <img src="/img/webchat.png" alt="Discord" className="size-4 object-cover pointer-events-none overflow-hidden shrink-0" />
            <span className="font-medium text-sm">Webchat</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default InsightsAgentsFilter;
