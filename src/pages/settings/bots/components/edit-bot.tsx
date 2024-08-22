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
import type { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Switch } from "@components/ui/switch";
import { Separator } from "@components/ui/separator";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface IProps {
  children: ReactNode;
}

const formSchema = z.object({
  allChannels: z.boolean(),
  general: z.boolean(),
  support: z.boolean(),
});

function EditBot({ children }: IProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      allChannels: false,
      general: false,
      support: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-[482px] border bg-card p-4 overflow-hidden">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold mb-3">Edit Discord Bot</AlertDialogTitle>
          <Separator className="mb-3 !mt-0" />
          <AlertDialogDescription className="text-brand-fifth font-medium flex justify-between">
            <span>Channel</span>
            <span>Reply</span>
          </AlertDialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 !mt-3" id="editBotForm">
              <FormField
                control={form.control}
                name="allChannels"
                render={({ field }) => (
                  <FormItem>
                    <Separator className="mb-4" />
                    <div className="flex items-center justify-between">
                      <FormLabel className="font-medium text-base">All Channels</FormLabel>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
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
                name="general"
                render={({ field }) => (
                  <FormItem>
                    <Separator className="mb-4" />
                    <div className="flex items-center justify-between">
                      <FormLabel className="font-medium text-base">General</FormLabel>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
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
                name="support"
                render={({ field }) => (
                  <FormItem>
                    <Separator className="mb-4" />
                    <div className="flex items-center justify-between">
                      <FormLabel className="font-medium text-base">Support</FormLabel>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </div>
                    <VisuallyHidden>
                      <FormDescription></FormDescription>
                    </VisuallyHidden>
                    <FormMessage />
                    <Separator className="!mt-4" />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </AlertDialogHeader>
        <AlertDialogFooter className="!space-x-3 items-end h-auto">
          <AlertDialogCancel className="rounded-xl h-9 w-[90px] bg-secondary hover:bg-secondary/80 font-semibold">Cancel</AlertDialogCancel>
          <AlertDialogAction className="w-[120px] h-9 rounded-xl font-semibold hover:bg-brand-secondary" type="submit" form="editBotForm">
            Save
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default EditBot;
