import { Separator } from "@components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useState } from "react";
import { useToast } from "@components/ui/use-toast";
import AuthWrapper from "./auth-wrapper";
import { Checkbox } from "@components/ui/checkbox";
import { useSign } from "@/api/use-sign";
import { preventEnterKeySubmission } from "@helpers/prevent-enter-submission-form";
import GoogleSign from "./google-sign";

// eslint-disable-next-line react-refresh/only-export-components
export const registerFormSchema = z.object({
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
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Invalid password",
    })
    .min(5, { message: "Minimum 5 characters" })
    .max(40, { message: "Maximum 40 characters" })
    .trim(),
    is_term: z.boolean().refine((value) => value === true, { message: "Agreement must be accepted" }),
});
function Register() {
  const [showPass, setPass] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { register } = useSign();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    shouldFocusError: false,
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      is_term:false
    },
  });

  const onSubmit = (values: z.infer<typeof registerFormSchema>) => {
    register.mutate(values, {
      onSuccess() {
        form.reset();
      },
      onError(error) {
        toast({
          title: error.response?.data[0] || "Oops! Something Went Wrong!",
          variant: "brandDestructive",
          duration: 3000,
        });
      },
    });

  };

  const handleNavigation = () => {
    navigate("/login", { replace: true });
  };

  return (
    <AuthWrapper>
      <section className="max-w-[350px] w-full">
        <h1 className="font-bold text-[32px]">Sign Up</h1>
        <span className="font-medium text-sm">Already have an account?</span>
        <Button
          onClick={handleNavigation}
          disabled={register.isPending}
          className="font-medium text-sm text-primary underline inline-block ml-1.5 bg-transparent p-0 hover:bg-transparent"
        >
          Log in
        </Button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-9" onKeyDown={preventEnterKeySubmission}>
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem className="relative mb-7">
                  <FormLabel className="font-medium text-sm !text-brand-fifth">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Full Name..."
                      disabled={register.isPending ? true : undefined}
                      type="text"
                      className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <VisuallyHidden>
                    <FormDescription></FormDescription>
                  </VisuallyHidden>
                  <FormMessage className="absolute -bottom-5 left-1 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="font-medium text-sm !text-brand-fifth">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email@email.com"
                      disabled={register.isPending ? true : undefined}
                      className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <VisuallyHidden>
                    <FormDescription></FormDescription>
                  </VisuallyHidden>
                  <FormMessage className="absolute -bottom-5 left-1 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mt-7 mb-9 relative">
                  <FormLabel className="font-medium text-sm !text-brand-fifth">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="******"
                      disabled={register.isPending ? true : undefined}
                      type={showPass ? "text" : "password"}
                      className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    className="absolute top-8 right-3 size-6 p-0 bg-transparent hover:bg-transparent z-10"
                    onClick={(event) => {
                      event.preventDefault();
                      setPass(!showPass);
                    }}
                  >
                    {showPass ? <img src="/svg/eye-open.svg" alt="" className="size-[22px]" /> : <img src="/svg/eye-off.svg" alt="" className="size-[22px]" />}
                  </Button>
                  <VisuallyHidden>
                    <FormDescription></FormDescription>
                  </VisuallyHidden>
                  <FormMessage className="absolute -bottom-5 left-1 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_term"
              render={({ field }) => (
                <FormItem className="relative mb-7 flex items-center space-y-0">
                  <FormControl>
                    <Checkbox disabled={register.isPending ? true : undefined} checked={field.value} onCheckedChange={field.onChange} className="size-4 mr-2 border-input" />
                  </FormControl>
                  <FormLabel className="font-medium text-sm !text-foreground">
                    <span>
                      I agree to{" "}
                      <Link to={"https://vilicos.com/terms"} target="_blank" className="text-brand-secondary">
                        Terms and Conditions
                      </Link>{" "}
                      &{" "}
                      <Link to={"https://vilicos.com/privacy"} target="_blank" className="text-brand-secondary">
                        Privacy Policy
                      </Link>
                    </span>
                  </FormLabel>
                  <VisuallyHidden>
                    <FormDescription></FormDescription>
                  </VisuallyHidden>
                  <FormMessage className="absolute -bottom-5 left-1 text-xs" />
                </FormItem>
              )}
            />
            <Button variant={"brand"} className="w-full rounded-lg h-11" disabled={register.isPending ? true : undefined}>
                 Next
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center my-8">
          <Separator className="bg-brand-fifth shrink" />
          <span className="text-brand-fifth text-sm font-medium inline-block mx-2">or</span>
          <Separator className="bg-brand-fifth shrink" />
        </div>
        <GoogleSign type="register"/>
      </section>
    </AuthWrapper>
  );
}

export default Register;
