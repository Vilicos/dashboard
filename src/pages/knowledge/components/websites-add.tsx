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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Separator } from "@components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  url: z
    .string({ invalid_type_error: "Invalid Link", required_error: "Link is required" })
    .startsWith("https://", { message: "Must provide secure Link: https://" })
    .url({ message: "Invalid Link" }),
});
function WebsitesAdd() {
    const[open,setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      url: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setOpen(previous => !previous)
    console.log(values);
    form.reset()
  };

  const isActive = true;
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger disabled={!isActive} asChild>
        <Button className="rounded-lg w-[70px] h-7 p-0 font-medium text-sm mr-2" variant={"brand"}>
          + Add
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card px-4 pt-5 pb-4 max-w-[482px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold text-xl">Add Website</AlertDialogTitle>
          <Separator />

          <AlertDialogDescription className="font-medium text-base text-foreground">Enter the URL of the content you want to sync</AlertDialogDescription>

          <Form {...form}>
            <form className="!mt-3 !mb-5 " id="conversationManageForm">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="font-medium text-sm max-w-[326px] text-brand-fifth">
                      Domains like https://remox.io will give better results than https://remox.io/about.
                    </FormLabel>
                    <FormControl className="!mt-5">
                      <Input
                        type="url"
                        placeholder="https://websitelink.com"
                        className="placeholder:text-base placeholder:text-brand-fifth/20 placeholder:font-semibold rounded-lg bg-transparent font-semibold text-base"
                        {...field}
                      />
                    </FormControl>
                    <VisuallyHidden>
                      <FormDescription className="text-sm text-brand-fifth">Please enter a valid website URL</FormDescription>
                    </VisuallyHidden>
                    <FormMessage className="absolute -bottom-5 left-1 text-xs font-semibold" />
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
            onClick={form.handleSubmit(onSubmit)}
            className="w-[90px] h-9 rounded-xl font-semibold transition-colors hover:bg-brand-secondary"
            type="submit"
            // form="conversationManageForm"
          >
            Sync
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default WebsitesAdd;
