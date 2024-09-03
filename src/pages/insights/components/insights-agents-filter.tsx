import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";

function InsightsAgentsFilter() {
  return (
    <Select defaultValue="allAgents">
      <SelectTrigger iconClassName='ml-1' className="min-w-[120px] w-fit h-9 rounded-lg pr-1 font-medium text-base bg-transparent">
        <SelectValue placeholder="Channels" />
      </SelectTrigger>
      <SelectContent className="rounded-lg min-w-28">
        <SelectItem value="allAgents" className="cursor-pointer text-sm rounded-lg font-medium">
          All Agents
        </SelectItem>
        <SelectItem value="general" className="cursor-pointer text-sm rounded-lg font-medium">
          general
        </SelectItem>
        <SelectItem value="support" className="cursor-pointer text-sm rounded-lg font-medium">
          support
        </SelectItem>
        <SelectItem value="admins" className="cursor-pointer text-sm rounded-lg font-medium">
          admins
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default InsightsAgentsFilter;
