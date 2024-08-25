import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import { Button } from "@components/ui/button";
import CustomTooltip from "@components/ui/custom-tooltip";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Separator } from "@components/ui/separator";
import { Switch } from "@components/ui/switch";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  messageHistory: z.boolean(),
  channel: z.string(),
});
function ConversationManage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      messageHistory: false,
      channel: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const isActive = true
  return (
    <AlertDialog>
      <AlertDialogTrigger disabled={!isActive} asChild>
        <Button className="rounded-sm size-6 p-0 bg-border hover:bg-brand-secondary">
          <CustomTooltip content="Manage" contentClass="text-sm" sideOffSet={12}>
            <img src="/svg/conversation-manage.svg" alt="Conversation" className="pointer-events-none w-[13.64px] h-3" />
          </CustomTooltip>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card px-4 pt-5 pb-4 max-w-[482px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold text-xl">Conversations Settings</AlertDialogTitle>
          <VisuallyHidden>
            <AlertDialogDescription>Conversations Settings</AlertDialogDescription>
          </VisuallyHidden>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="!my-3 space-y-5" id="conversationManageForm">
              <FormField
                control={form.control}
                name="messageHistory"
                render={({ field }) => (
                  <FormItem>
                    <p className="font-medium mb-3">Use Conversations</p>
                    <div className="flex items-center gap-x-2">
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="font-medium text-sm">Vilicos can read message history</FormLabel>
                    </div>
                    <VisuallyHidden>
                      <FormDescription></FormDescription>
                    </VisuallyHidden>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="channel"
                render={({ field }) => (
                  <FormItem className="max-w-[180px]">
                    <FormLabel className="font-semibold">Select Channels</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="!border rounded-lg pl-3 pr-3 bg-transparent font-semibold text-base">
                          <SelectValue placeholder="Channels" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg ">
                          <SelectItem value="allchannel" className="cursor-pointer text-sm rounded-lg">
                            All Channels
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <VisuallyHidden>
                      <FormDescription></FormDescription>
                    </VisuallyHidden>

                    <FormMessage className="text-xs h-4 truncate" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Separator />
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:space-x-3">
          <AlertDialogCancel className="w-[90px] h-9 rounded-xl font-semibold transition-colors bg-secondary hover:bg-secondary/80">Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onSubmit}
            className="w-[90px] h-9 rounded-xl font-semibold transition-colors hover:bg-brand-secondary"
            type="submit"
            form="conversationManageForm"
          >
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ConversationManage;
