import { Button } from "@components/ui/button";
import { useToast } from "@components/ui/use-toast";

function WebsiteSync() {
  const { toast } = useToast();
  
  const handler = () => {
    console.log("Debounced")
    toast({
      title: "Sync request has been sent.",
      variant: "brandDefault",
      duration: 3000,

    });
  }
  const isLoading = false
  return (
    <Button className="p-0 size-6 rounded bg-border hover:bg-brand-secondary" disabled={isLoading} onClick={handler}>
      <img src="/svg/sync.svg" alt="Sync" className={`pointer-events-none select-none size-3 ${isLoading && "animate-reverse-spin" }`} />
    </Button>
  );
}

export default WebsiteSync;
