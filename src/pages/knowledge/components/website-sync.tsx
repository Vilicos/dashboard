import { useSyncWebsites } from "@/api/use-sync-websites";
import { Button } from "@components/ui/button";
import { useToast } from "@components/ui/use-toast";

function WebsiteSync({ id }: { id: number }) {
  const { toast } = useToast();
  const { mutate, isPending } = useSyncWebsites();
  const handler = () => {
    mutate(id, {
      onSuccess() {
        toast({
          title: "Sync request has been sent.",
          variant: "brandDefault",
          duration: 3000,
        });
      },
      onError() {
        toast({
          title: "Oops! Somethings Went Wrong!",
          variant: "brandDestructive",
          duration: 3000,
        });
      },
    });
  };

  return (
    <Button className="p-0 size-6 rounded bg-border hover:bg-brand-secondary" disabled={isPending} onClick={handler}>
      <img src="/svg/sync.svg" alt="Sync" className={`pointer-events-none select-none size-3 ${isPending && "animate-reverse-spin"}`} />
    </Button>
  );
}

export default WebsiteSync;
