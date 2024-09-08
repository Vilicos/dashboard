import { Button } from "@components/ui/button";
import { useToast } from "@components/ui/use-toast";

function InsightsShare() {
  const { toast } = useToast();
  const clipboard = navigator.clipboard;

  const copyToClipboard = async () => {
    try {
      await clipboard.writeText(window.location.href);
      toast({
        title: "URL copied to clipboard",
        variant: "brandDefault",
        duration: 3000,
      });
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
      toast({
        title: "Oops! Something went wrong.",
        variant: "brandDestructive",
        duration: 3000,
      });
    }
  };
  return (
    <Button className="w-[100px] h-9 rounded-xl" variant={"brand"} onClick={copyToClipboard}>
      Share
    </Button>
  );
}

export default InsightsShare;
