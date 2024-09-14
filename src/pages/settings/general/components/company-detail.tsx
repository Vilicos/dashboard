import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Separator } from "@components/ui/separator";
import { fileTypes, uploadSize } from "@constants/static-data";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
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
  userFullName: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Invalid full name",
    })
    .min(3, { message: "Minimum 3 characters" })
    .max(40, { message: "Maximum 32 characters" })
    .trim(),
});

function CompanyDetail() {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  // const [cookies] = useCookies(["refreshToken", "accessToken"]);
  // const { data,isPending,isSuccess,isError } = useGetCompany(cookies.refreshToken);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      logo: undefined,
      companyName: "",
      userFullName: "",
    },
  });
  const isChanged = form.formState.isDirty;
  const isSubmitting = false
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) =>{
      if(key === "logo"){
        if (value instanceof File){
          formData.append(key, value);
        }else{
          formData.append(key, String(""));
        }
      }else{
        formData.append(key, String(value));
      }
    })
    for (const pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
  };

  const formReset = () =>{
    form.reset()
  }
  return (
    <div className="bg-card p-5 rounded-lg border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="inviteMemberForm">
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
                      <AvatarImage src={selectedImage ?? ""} className="object-cover"/>
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

                  <FormMessage className="text-xs h-4 truncate absolute -bottom-5" />
                </FormItem>
                <p className="font-medium text-xs text-brand-fifth mt-6">Logo is optional but strongly recommended.</p>
                <Separator className="my-8" />
              </>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <>
                <FormItem className="relative space-y-0">
                  <FormLabel className="font-bold text-xl !text-foreground">Company Name</FormLabel>
                  <FormDescription className="font-medium text-sm text-brand-fifth !my-5">This is your company’s name.</FormDescription>
                  <FormControl>
                    <Input
                      placeholder="Vilicos"
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
            name="userFullName"
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
          <div className="space-x-5 flex items-center justify-end">
            {isChanged && (
              <Button className="w-[90px] h-9 rounded-xl text-sm font-semibold" type="submit" variant={"secondary"} onClick={formReset}>
                Cancel
              </Button>
            )}

            <Button className="w-[120px] h-9 rounded-xl text-sm font-semibold relative" type="submit" variant={"brand"} disabled={isSubmitting} >
              {
                isSubmitting && <RefreshCw className="size-4 animate-spin mr-0.5 shrink-0"/>
              }
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default CompanyDetail;
