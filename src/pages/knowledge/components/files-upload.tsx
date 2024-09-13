import { useCreateFiles } from "@/api/use-create-files";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { useToast } from "@components/ui/use-toast";
import { companyFileSize, companyFileType } from "@constants/static-data";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { RefreshCw } from "lucide-react";

function FilesUpload() {
  const { toast } = useToast();
  const { mutate, isPending } = useCreateFiles();
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const file = input.files?.[0];

    if (!file) return;

    const isInvalidFormat = file.type !== companyFileType;
    const isOversized = file.size > companyFileSize;

    if (isInvalidFormat) {
      toast({
        title: "Only PDF files are supported",
        variant: "brandDestructive",
        duration: 3000,
      });
    }

    if (isOversized) {
      toast({
        title: "File size must be a maximum of 25 MB",
        variant: "brandDestructive",
        duration: 3000,
      });
    }

    const formData = new FormData();
    formData.append("file", file);
    mutate(formData, {
      onSuccess() {
        toast({
          title: "File Uploaded",
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

    input.value = "";
  };
  return (
    <>
      <Label
        htmlFor="fileUpload"
        className={`${
          isPending ? "bg-muted/40 pointer-events-none" : "bg-primary "
        } w-[90px] h-7 rounded-lg gap-x-1 flex items-center justify-center cursor-pointer hover:bg-brand-secondary transition-colors select-none`}
      >
        {isPending ? <RefreshCw className="size-[17px] animate-spin" /> : <img src="/svg/upload.svg" alt="Upload" className="pointer-events-none size-[14px]" />}
        Upload
      </Label>
      <VisuallyHidden>
        <Input id="fileUpload" type="file" className="pointer-events-none" accept="application/pdf" onChange={handleUpload} />
      </VisuallyHidden>
    </>
  );
}

export default FilesUpload;
