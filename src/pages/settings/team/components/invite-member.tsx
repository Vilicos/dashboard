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
import { Separator } from "@components/ui/separator";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserRole } from "@custom-types/index";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Input } from "@components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Button } from "@components/ui/button";
import { preventEnterKeySubmission } from "@helpers/prevent-enter-submission-form";
import { useInviteMember } from "@/api/use-invite-member";
import { useToast } from "@components/ui/use-toast";

const formSchema = z.object({
  full_name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Invalid full name",
    })
    .min(3, { message: "Minimum 3 characters" })
    .max(40, { message: "Maximum 40 characters" })
    .trim(),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid email address",
    })
    .email({ message: "Invalid email address" }),
  role: z.nativeEnum(UserRole, { required_error: "Role is required", message: "Invalid Role", invalid_type_error: "Invalid Role" }).refine((value) => value !== undefined, {
    message: "Role is required",
  }),
});

function InviteMember() {
  const [isOpen, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode:"onBlur",
    defaultValues: {
      full_name: "",
      email: "",
      role: UserRole.Member,
    },
  });

  const {mutate} = useInviteMember()
  const { toast } = useToast();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
     mutate(values, {
      onError() {
        toast({
          title: "Oops! Somethings Went Wrong!",
          variant: "brandDestructive",
          duration: 3000,
        });
      },
      onSettled() {
        setOpen(false);
        form.reset();
      },
    });
  };
  
  const formReset = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(false);
    form.reset();
  };
  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="rounded-xl w-[90px] h-9 font-semibold" variant={'brand'}>Invite</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card px-4 pt-5 pb-4 max-w-[674px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold text-xl">Invite Members</AlertDialogTitle>
          <VisuallyHidden>
            <AlertDialogDescription>Invite Members Form</AlertDialogDescription>
          </VisuallyHidden>
          <Separator />
          <Form {...form}>
            <form className="!mt-6 !mb-7 flex items-start gap-x-8" id="inviteMemberForm" onKeyDown={preventEnterKeySubmission}>
              <FormField
                control={form.control}
                name="full_name"
                render={({field}) => (
                  <FormItem className="basis-1/3 relative">
                    <FormLabel className="font-medium text-sm text-brand-fifth">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Orkhan Aslanov"
                        className="placeholder:text-base placeholder:text-brand-fifth/20 placeholder:font-semibold rounded-lg bg-transparent font-semibold text-base"
                        {...field}
                      />
                    </FormControl>

                    <VisuallyHidden>
                      <FormDescription></FormDescription>
                    </VisuallyHidden>

                    <FormMessage className="text-xs h-4 truncate absolute -bottom-6 left-1"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem className="basis-1/3 relative">
                    <FormLabel className="font-medium text-sm text-brand-fifth">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="orkhan@vilicos.com"
                        className="placeholder:text-base placeholder:text-brand-fifth/20 placeholder:font-semibold rounded-lg bg-transparent font-semibold text-base"
                        {...field}
                      />
                    </FormControl>

                    <VisuallyHidden>
                      <FormDescription></FormDescription>
                    </VisuallyHidden>

                    <FormMessage className="text-xs h-4 truncate absolute -bottom-6 left-1"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="basis-1/3 relative">
                    <FormLabel className="font-medium text-sm text-brand-fifth">Role</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value} disabled>
                        <SelectTrigger className="!border rounded-lg pl-3 pr-3 bg-transparent font-semibold text-base">
                          <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg min-w-28">
                          {Object.entries(UserRole).map((item) => (
                            <SelectItem value={item[1]} className="cursor-pointer text-sm rounded-lg" key={item[0]}>
                              {item[0]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>

                    <VisuallyHidden>
                      <FormDescription></FormDescription>
                    </VisuallyHidden>

                    <FormMessage className="text-xs h-4 truncate absolute -bottom-6 left-1"/>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Separator />
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:space-x-3">
          <AlertDialogCancel className="w-[90px] h-9 rounded-xl font-semibold transition-colors bg-secondary hover:bg-secondary/80" onClick={formReset}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="w-[90px] h-9 rounded-xl font-semibold transition-colors hover:bg-brand-secondary"
            type="submit"
            onClick={form.handleSubmit(onSubmit)}
          >
            Invite
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default InviteMember;
