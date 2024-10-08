import { useGetCompany } from "@/api/use-get-company";
import { useUpdateCompany } from "@/api/use-update-company";
import { useUpdateUser } from "@/api/use-update-user";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Separator } from "@components/ui/separator";
import { fileTypes, uploadSize } from "@constants/static-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DeleteAccount from "./delete-account";
import { preventEnterKeySubmission } from "@helpers/prevent-enter-submission-form";

const formSchema = z.object({
  logo: z.union([
    z
      .instanceof(File, { message: "Upload Image" })
      .refine((file) => fileTypes.has(file.type), { message: "Only png, jpg, jpeg and webp supported" })
      .refine((file) => file.size < uploadSize, { message: "Image must be less than 1.5MB" })
      .optional(),
    z.literal(""),
  ]),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Invalid full name",
    })
    .min(3, { message: "Minimum 3 characters" })
    .max(40, { message: "Maximum 40 characters" })
    .trim(),
  full_name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Invalid full name",
    })
    .min(3, { message: "Minimum 3 characters" })
    .max(40, { message: "Maximum 32 characters" })
    .trim(),
  password:z
  .string().optional().refine((value)=> !value || (value.length>=5 && value.length <=40),{message:"Password must be between 5 and 40 characters if provided"})
});

function CompanyDetail() {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [showPass, setPass] = useState(false);
  const [cookies] = useCookies(["refreshToken", "accessToken"]);
  const { data, isPending, isSuccess } = useGetCompany(cookies.refreshToken);
  const { mutate: updateCompany, isPending: companyPending } = useUpdateCompany();
  const { mutate: updateUser, isPending: userPending } = useUpdateUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      logo: undefined,
      name: "",
      full_name: "",
      password:""
    },
  });
  const isChanged = form.formState.isDirty;
  const isSubmitting = companyPending || userPending || isPending;

  useEffect(() => {
    if (data && data.results && isSuccess) {
      form.resetField("full_name", { defaultValue: data.results.full_name });
      form.resetField("name", { defaultValue: data.results.name });
      form.resetField("password",{defaultValue:""})
      setSelectedImage(data.results.logo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isSuccess]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === "logo") {
        if (value instanceof File) {
          formData.append(key, value);
        }
      } else {
        formData.append(key, String(value));
      }
    });
    if (isSuccess && data && data.results.id) {
      updateCompany({ formData: formData, id: data.results.id });
      if(values.password){
        updateUser({full_name:values.full_name,password:values.password})
      }else{
        updateUser({full_name:values.full_name})
      }
    }
  };

  const formReset = () => {
    if (data && data.results && !isPending && isSuccess) {
      setSelectedImage(data.results.logo);
      form.resetField("full_name", { defaultValue: data.results.full_name });
      form.resetField("name", { defaultValue: data.results.name });
      form.resetField("password",{defaultValue:""})
    } else {
      form.reset();
    }
  };
  return (
    <div className="bg-card p-5 rounded-lg border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="inviteMemberForm" onKeyDown={preventEnterKeySubmission}>
          <FormField
            control={form.control}
            name="logo"
            // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
            render={({ field: { value, onChange, ...field } }) => (
              <>
                <FormItem className="relative space-y-0">
                  <p className="font-bold text-xl !text-foreground">Company Logo</p>
                  <FormDescription className="font-medium text-sm text-brand-fifth !my-5">This is your company’s logo.</FormDescription>
                  <FormLabel className="inline-block cursor-pointer size-20 rounded-full">
                    <Avatar className="size-20 overflow-hidden rounded-full">
                      <AvatarImage src={selectedImage ?? ""} className="object-cover" />
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
                        disabled={isPending || (isSuccess && data.results.user_type === "member")}
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

                  <FormMessage className="text-xs h-4 truncate absolute -bottom-5" />
                </FormItem>
                <p className="font-medium text-xs text-brand-fifth mt-6">Logo is optional but strongly recommended.</p>
                <Separator className="my-8" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <>
                <FormItem className="relative space-y-0">
                  <FormLabel className="font-bold text-xl !text-foreground">Company Name</FormLabel>
                  <FormDescription className="font-medium text-sm text-brand-fifth !my-5">This is your company’s name.</FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Vilicos"
                      disabled={isPending || (isSuccess && data.results.user_type === "member")}
                      className="placeholder:text-sm placeholder:text-brand-fifth/20 placeholder:font-medium rounded-lg bg-transparent font-medium text-sm w-[350px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-xs h-4 truncate absolute -bottom-5" />
                </FormItem>
                <p className="font-medium text-xs text-brand-fifth mt-6">Please us 32 characters at max.</p>
                <Separator className="my-8" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="full_name"
            render={({ field }) => (
              <>
                <FormItem className="relative space-y-0">
                  <FormLabel className="font-bold text-xl !text-foreground">User Full Name</FormLabel>
                  <FormDescription className="font-medium text-sm text-brand-fifth !my-5">This is your full name.</FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Vilicos"
                      className="placeholder:text-sm placeholder:text-brand-fifth/20 placeholder:font-medium rounded-lg bg-transparent font-medium text-sm w-[350px]"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-xs h-4 truncate absolute -bottom-5" />
                </FormItem>
                <Separator className="mt-8 mb-5" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <>
                <FormItem className="relative space-y-0">
                  <FormLabel className="font-bold text-xl !text-foreground">New Password</FormLabel>
                  <FormDescription className="font-medium text-sm text-brand-fifth !my-5">This is your new password.</FormDescription>
                  <FormControl>
                    <Input
                      placeholder="New Password"
                      type={showPass ? "text" : "password"}
                      className="placeholder:text-sm placeholder:text-brand-fifth/20 placeholder:font-medium rounded-lg pr-10 bg-transparent font-medium text-sm w-[350px]"
                      {...field}
                    />
                  </FormControl>
                  <Button
                    className="absolute bottom-2 left-[315px] size-6 p-0 bg-transparent hover:bg-transparent z-10"
                    onClick={(event) => {
                      event.preventDefault();
                      setPass(!showPass);
                    }}
                  >
                    {showPass ? <img src="/svg/eye-open.svg" alt="" className="size-[22px]" /> : <img src="/svg/eye-off.svg" alt="" className="size-[22px]" />}
                  </Button>
                  <FormMessage className="text-xs h-4 truncate absolute -bottom-5" />
                </FormItem>
                <Separator className="mt-8 mb-5" />
              </>
            )}
          />
          <div className="flex items-center justify-between">
            <DeleteAccount/>
            <div className="space-x-5 flex items-center">
              {isChanged && (
                <Button className="w-[90px] h-9 rounded-xl text-sm font-semibold" type="submit" variant={"secondary"} onClick={formReset}>
                  Cancel
                </Button>
              )}

              <Button className="w-[120px] h-9 rounded-xl text-sm font-semibold relative" type="submit" variant={"brand"} disabled={isSubmitting}>
                {isSubmitting && <RefreshCw className="size-4 animate-spin mr-0.5 shrink-0" />}
                Save
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CompanyDetail;
