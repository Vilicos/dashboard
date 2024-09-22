import { useUpdateDiscordChannel } from "@/api/use-discord-permission";
import { Label } from "@components/ui/label";
import { Separator } from "@components/ui/separator";
import { Switch } from "@components/ui/switch";
import { useToast } from "@components/ui/use-toast";
import { useDebounce } from "@hooks/use-debounce";
import { useCallback } from "react";

function ChannelItem({ name = "N/A", isEnable = false, id }: { name: string; isEnable: boolean; id: number }) {
  const { mutate } = useUpdateDiscordChannel(id);
  const { toast } = useToast();
  const debouncedMutate = useDebounce((checked: boolean) => {
    mutate(
      { is_active: checked },
      {
        onError() {
          toast({
            title: "Oops! Something went wrong!",
            variant: "brandDestructive",
            duration: 3000,
          });
        },
      }
    );
  }, 200);

  const onChecked = useCallback(
    (checked: boolean) => {
      debouncedMutate(checked);
    },
    [debouncedMutate]
  );
  return (
    <div className="mt-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="switch1" className="font-medium text-base truncate max-w-64">
          {name}
        </Label>
        <Switch id="switch1" defaultChecked={isEnable} onCheckedChange={onChecked} />
      </div>
      <Separator className="!mt-2" />
    </div>
  );
}

export default ChannelItem;
