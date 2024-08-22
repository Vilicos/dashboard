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

const formSchema = z.object({
  fullName: z
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
      fullName: "",
      email: "",
      role: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Form validation logic
    const isValid = form.formState.isValid; // Form doğrulama fonksiyonunuzu çağırın

    if (isValid) {
      setOpen(false); // Form geçerliyse dialog'u kapatın
    }
  };
  console.log(form.getValues('role'))
  return (
    <AlertDialog open={isOpen} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="rounded-xl w-[90px] h-9 font-semibold ">Invite</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card px-4 pt-5 pb-4 max-w-[674px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold text-xl">Invite Members</AlertDialogTitle>
          <VisuallyHidden>
            <AlertDialogDescription>Invite Members Form</AlertDialogDescription>
          </VisuallyHidden>
          <Separator />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="!my-6 flex items-start gap-x-8" id="inviteMemberForm">
              <FormField
                control={form.control}
                name="fullName"
                render={({field}) => (
                  <FormItem className="basis-1/3">
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

                    <FormMessage className="text-xs h-4 truncate"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem className="basis-1/3">
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

                    <FormMessage className="text-xs h-4 truncate"/>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="basis-1/3">
                    <FormLabel className="font-medium text-sm text-brand-fifth">Role</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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

                    <FormMessage className="text-xs h-4 truncate"/>
                  </FormItem>
                )}
              />
            </form>
          </Form>
          <Separator />
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:space-x-3">
          <AlertDialogCancel className="w-[90px] h-9 rounded-xl font-semibold transition-colors bg-secondary hover:bg-brand-fifth">Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="w-[90px] h-9 rounded-xl font-semibold transition-colors"
            type="submit"
            form="inviteMemberForm"
            onClick={handleSubmit}
          >
            Invite
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default InviteMember;
