import { Separator } from "@components/ui/separator";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { authData } from "@constants/static-data";

function AuthComponent() {
  const [showPass, setPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const authType = location.pathname as keyof typeof authData;
  const config = authData[authType];

  const form = useForm<z.infer<typeof config.formSchema>>({
    resolver: zodResolver(config.formSchema),
    shouldFocusError: false,
    mode: "onBlur",
    defaultValues: config.defaultValues,
  });

  const onSubmit = async (values: z.infer<typeof config.formSchema>) => {
    console.log(values);
  };
  const handleNavigation = () => {
    form.reset();
    navigate(config.urlPath);
  };
  
  useEffect(() => {
    if (authType === "/login" && form.formState.isSubmitSuccessful){
      form.reset();
      navigate("/")
    }else if(authType === "/register" && form.formState.isSubmitSuccessful){
      form.reset();
      navigate('/create-company')
    }
  }, [authType, form, form.formState.isSubmitSuccessful, navigate]);

  return (
    <section className="max-w-[350px] w-full">
      <h1 className="font-bold text-[32px]">{config.title}</h1>
      <span className="font-medium text-sm">{config.description}</span>
      <Button onClick={handleNavigation} className="font-medium text-sm text-primary underline inline-block ml-1.5 bg-transparent p-0 hover:bg-transparent">
        {config.urlTitle}
      </Button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-9">
          {authType === "/register" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="relative mb-7">
                  <FormLabel className="font-medium text-sm !text-brand-fifth">Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Full Name..." className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm" {...field} />
                  </FormControl>
                  <VisuallyHidden>
                    <FormDescription></FormDescription>
                  </VisuallyHidden>
                  <FormMessage className="absolute -bottom-5 left-1 text-xs" />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="font-medium text-sm !text-brand-fifth">Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email@email.com" className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm" {...field} />
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
                <FormControl className="relative">
                  <>
                    <Input
                      placeholder="******"
                      type={showPass ? "text" : "password"}
                      className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm"
                      {...field}
                    />
                    <Button
                      className="absolute top-8 right-3 size-6 p-0 bg-transparent hover:bg-transparent z-10"
                      onClick={(event) => {
                        event.preventDefault();
                        setPass(!showPass);
                      }}
                    >
                      {showPass ? <img src="/svg/eye-open.svg" alt="" className="size-[22px]" /> : <img src="/svg/eye-off.svg" alt="" className="size-[22px]" />}
                    </Button>
                  </>
                </FormControl>
                <VisuallyHidden>
                  <FormDescription></FormDescription>
                </VisuallyHidden>
                <FormMessage className="absolute -bottom-5 left-1 text-xs" />
              </FormItem>
            )}
          />
          <Button type="submit" variant={"brand"} className="w-full rounded-lg h-11">
            {config.submitName}
          </Button>
        </form>
      </Form>
      <div className="flex items-center justify-center my-8">
        <Separator className="bg-brand-fifth shrink" />
        <span className="text-brand-fifth text-sm font-medium inline-block mx-2">or</span>
        <Separator className="bg-brand-fifth shrink" />
      </div>
      <Link to={""} className="bg-primary hover:bg-brand-secondary w-full py-[10px] px-5 rounded-lg flex items-center transition-colors">
        <img src="/img/google.png" alt="Google" className="pointer-events-none size-6 shrink-0" />
        <span className="font-semibold ml-[62px]">{config.googleName}</span>
      </Link>
    </section>
  );
}

export default AuthComponent;
