import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { useToast } from "@components/ui/use-toast";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { RefreshCw } from "lucide-react";

function FilesUpload() {
  const { toast } = useToast();
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    if (!file) return;

    const isInvalidFormat = file.type !== "application/pdf";
    const isOversized = file.size > 25 * 1024 * 1024;

    if (isInvalidFormat) {
      toast({
        title: "Wrong file format!",
        description: "Only PDF files are supported",
        variant: "brandDestructive",
        duration: 2000,
      });
    } else if (isOversized) {
      toast({
        title: "File size is too large!",
        description: "File size must be a maximum of 25 MB",
        variant: "brandDestructive",
        duration: 2000,
      });
    } else {
      console.log(file);
    }

    input.value = "";
  };
  const loading = false;
  return (
    <>
      <Label htmlFor="fileUpload" className={`${loading ? "bg-muted/40 pointer-events-none":"bg-primary "} w-[90px] h-7 rounded-lg gap-x-1 flex items-center justify-center cursor-pointer hover:bg-brand-secondary transition-colors select-none`}>
        {
            loading ? <RefreshCw className="size-[17px] animate-spin"/> : <img src="/svg/upload.svg" alt="Upload" className="pointer-events-none size-[14px]" />
        }
        Upload
      </Label>
      <VisuallyHidden>
        <Input id="fileUpload" type="file" className="pointer-events-none" accept="application/pdf" onChange={handleUpload} />
      </VisuallyHidden>
    </>
  );
}

export default FilesUpload;
