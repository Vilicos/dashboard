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
import { useAuth } from "@/api/use-auth";
import { useToast } from "@components/ui/use-toast";
import AuthWrapper from "./auth-wrapper";
import { errorHandler } from "@helpers/error-handler";

// eslint-disable-next-line react-refresh/only-export-components
export const loginFormSchema = z.object({
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
});

function Login() {
  const [showPass, setPass] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    shouldFocusError: false,
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    login.mutate(values, {
      onSuccess() {
        form.reset();
        navigate("/", { replace: true });
      },
      onError(error) {
        toast({
          title: errorHandler(error),
          variant: "brandDestructive",
          duration: 3000,
        });
      },
    });
  };

 
  const handleNavigation = () => {
    navigate("/register", { replace: true });
  };
  
  return (
    <AuthWrapper>
      <section className="max-w-[350px] w-full">
        <h1 className="font-bold text-[32px]">Log In</h1>
        <span className="font-medium text-sm">Don&apos;t have an account?</span>
        <Button
          onClick={handleNavigation}
          disabled={login.isPending}
          className="font-medium text-sm text-primary underline inline-block ml-1.5 bg-transparent p-0 hover:bg-transparent"
        >
          Create Now
        </Button>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="mt-9">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="font-medium text-sm !text-brand-fifth">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email@email.com"
                      disabled={login.isPending ? true : undefined}
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
                      disabled={login.isPending ? true : undefined}
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
            <Button variant={"brand"} className="w-full rounded-lg h-11" disabled={login.isPending ? true : undefined}>
              Log In
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center my-8">
          <Separator className="bg-brand-fifth shrink" />
          <span className="text-brand-fifth text-sm font-medium inline-block mx-2">or</span>
          <Separator className="bg-brand-fifth shrink" />
        </div>
        <Link
          to={""}
          className={`bg-primary  w-full py-[10px] px-5 rounded-lg flex items-center transition-colors ${
            login.isPending ? "opacity-50 pointer-events-none" : "hover:bg-brand-secondary"
          }`}
        >
          <img src="/img/google.png" alt="Google" className="pointer-events-none size-6 shrink-0" />
          <span className="font-semibold ml-[62px]">Login with Google</span>
        </Link>
      </section>
    </AuthWrapper>
  );
}

export default Login;
