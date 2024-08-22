import LogoWrapper from "@components/shared/logo-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { fileTypes, uploadSize } from "@constants/static-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  logo: z.union([
    z
      .instanceof(File, { message: "Upload Image" })
      .refine((file) => fileTypes.has(file.type), { message: "Only png, jpg, jpeg and webp supported" })
      .refine((file) => file.size < uploadSize, { message: "Image must be less than 1.5MB" })
      .optional(),
    z.literal(""),
  ]),
  companyName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Invalid full name",
    })
    .min(3, { message: "Minimum 3 characters" })
    .max(40, { message: "Maximum 40 characters" })
    .trim(),
});
function CreateCompany() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      logo: undefined,
      companyName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const previousNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate("/register", { replace: true });
  };

  useEffect(() => {
    if (form.formState.isSubmitSuccessful) return navigate("/");
  }, [form.formState.isSubmitSuccessful, navigate]);

  return (
    <main className="min-h-dvh flex items-center justify-center">
      <section className="absolute top-8 left-10">
        <LogoWrapper />
      </section>
      <section className="max-w-[350px] w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="logo"
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              render={({ field: { value, onChange, ...field } }) => (
                <>
                  <FormItem className="relative mb-8">
                    <FormLabel className="max-w-fit">
                      <Avatar className="size-20 overflow-hidden mx-auto cursor-pointer">
                        <AvatarImage src={selectedImage ?? ""} />
                        <AvatarFallback>
                          <img src="/img/empty-upload.png" alt="Empty" className="w-full h-full object-cover" />
                        </AvatarFallback>
                      </Avatar>
                    </FormLabel>
                    <FormControl>
                      <VisuallyHidden asChild>
                        <Input
                          className="pointer-events-none"
                          accept="image/png,image/jpg,image/jpeg,image/webp"
                          disabled={form.formState.isSubmitting ? true : false}
                          type="file"
                          {...field}
                          onChange={(event) => {
                            const file = event.target.files ? event.target.files[0] : "";
                            if (file && file instanceof File) {
                              onChange(file);
                              setSelectedImage(URL.createObjectURL(file));
                            } else {
                              setSelectedImage(null);
                            }
                          }}
                        />
                      </VisuallyHidden>
                    </FormControl>
                    <FormDescription className="font-medium text-brand-fifth !my-5 text-center">Upload Logo</FormDescription>
                    <FormMessage className="text-xs truncate absolute -bottom-5 left-0 right-0 mx-auto max-w-fit" />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="font-medium text-sm !text-brand-fifth">Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Company Name....." className="placeholder:font-medium placeholder:text-brand-auth-placeholder placeholder:text-sm" {...field} />
                  </FormControl>
                  <VisuallyHidden>
                    <FormDescription></FormDescription>
                  </VisuallyHidden>
                  <FormMessage className="absolute -bottom-5 left-1 text-xs" />
                </FormItem>
              )}
            />
            <div className="flex items-center *:w-[165px] *:h-11 *:rounded-lg space-x-5 *:font-semibold mt-8">
              <Button variant={"secondary"} className="w-full" onClick={previousNavigate}>
                Back
              </Button>
              <Button type="submit" variant={"brand"} className="w-full ">
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}

export default CreateCompany;
