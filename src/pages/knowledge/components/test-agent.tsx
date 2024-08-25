import { Button } from "@components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { Separator } from "@components/ui/separator";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function TestAgent() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"brand"} className="rounded-xl font-semibold text-sm w-[120px] h-9 disabled:bg-secondary">
          Test Agent
        </Button>
      </DialogTrigger>
      <DialogContent className="border max-w-[600px] py-5 px-4" closeClassName="top-6">
        <DialogHeader>
          <DialogTitle>Vilicos AI Agent</DialogTitle>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <Separator className="absolute top-[53px]"/>
        <DialogFooter className="sm:justify-center">
            
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TestAgent;
