import { useState, type ReactNode } from "react";
import { Separator } from "@components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { useCookies } from "react-cookie";
import { useGetDiscordChannels } from "@/api/use-get-discord-channels";
import { ScrollArea } from "@components/ui/scroll-area";
import ChannelItem from "./channel-item";

interface IProps {
  children: ReactNode;
}

function EditBot({ children }: IProps) {
  const [open, setOpen] = useState(false);
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess } = useGetDiscordChannels(cookies.refreshToken);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[482px] border bg-card p-4 overflow-hidden min-h-[318px] max-h-[600px] gap-0">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Edit Discord Bot</DialogTitle>
          <Separator className="!my-2" />
          <DialogDescription className="text-brand-fifth font-medium flex justify-between !mt-0">
            <span>Channel</span>
            <span>Reply</span>
          </DialogDescription>
          <Separator className="!mt-2" />
        </DialogHeader>
        <ScrollArea type="always" className="overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-transparent h-full">
          {!isPending && isSuccess && data && data.results.map((item) => <ChannelItem key={item.id} name={item.name} id={item.id} isEnable={item.is_active} />)}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default EditBot;
