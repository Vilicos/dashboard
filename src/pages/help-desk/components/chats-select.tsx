import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
function ChatsSelect() {
  return (
    <>
      <Select defaultValue="allChannels">
        <SelectTrigger className="w-[150px] h-9 rounded-lg pl-2 pr-1 font-medium text-base bg-transparent">
          <SelectValue placeholder="Channels" />
        </SelectTrigger>
        <SelectContent className="rounded-lg min-w-28">
          <SelectItem value="allChannels" className="cursor-pointer text-sm rounded-lg font-medium">
            All Channels
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
      <Select defaultValue="newest">
        <SelectTrigger className="w-[150px] h-9 rounded-lg pl-2 pr-1 font-medium text-base bg-transparent">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent className="rounded-lg min-w-28">
          <SelectItem value="newest" className="cursor-pointer text-sm rounded-lg font-medium">
            Newest
          </SelectItem>
          <SelectItem value="oldest" className="cursor-pointer text-sm rounded-lg font-medium">
            Oldest
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

export default ChatsSelect;
