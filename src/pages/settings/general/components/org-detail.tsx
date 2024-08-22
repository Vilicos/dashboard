import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form";
import { Input } from "@components/ui/input";
import { Separator } from "@components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 1;
const ACCEPTED_FILE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/jpg"]);

const formSchema = z.object({
  logo: z
    .instanceof(File, { message: "Upload Img" })
    .refine((file) => ACCEPTED_FILE_TYPES.has(file.type), { message: "Only png, jpg, jpeg and webp supported" })
    .refine((file) => file.size < MAX_UPLOAD_SIZE, { message: "Image must be less than 3MB" })
    .optional(),
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
    .max(32, { message: "Maximum 32 characters" })
    .trim(),
});

function OrgDetail() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      logo: undefined,
      companyName: "",
      userFullName: "",
    },
  });
  const fileRef = form.register("logo");
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <div className="bg-card p-5 rounded-lg border">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} id="inviteMemberForm">
          <FormField
            control={form.control}
            name="logo"
            render={({ field: { onChange } }) => (
              <>
                <FormItem className="relative space-y-0">
                  <FormLabel className="font-bold text-xl !text-foreground">Company Logo</FormLabel>
                  <FormDescription className="font-medium text-sm text-brand-fifth !my-5">This is your company’s logo.</FormDescription>
                  <FormControl>
                    <>
                      <Avatar className="size-20 overflow-hidden">
                        <AvatarImage src="https://github.com/shadcn.pn" />
                        <AvatarFallback>
                          <img src="/img/empty-upload.png" alt="Empty" className="w-full h-full object-cover" />
                        </AvatarFallback>
                      </Avatar>
                      <VisuallyHidden asChild>
                        <Input
                          id="uploadIMG"
                          className="pointer-events-none"
                          accept="image/png,image/jpg,image/jpeg,image/webp"
                          disabled={form.formState.isSubmitting ? true : false}
                          type="file"
                          {...fileRef}
                          onChange={(event) => {
                            onChange(event.target?.files?.[0] ?? undefined);
                            // setLogo(URL.createObjectURL(event.target?.files?.[0] ?? undefined));
                          }}
                        />
                      </VisuallyHidden>
                    </>
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
          <Button className="w-[90px] h-9 rounded-xl text-sm font-semibold bg-secondary hover:bg-brand-fifth" type="submit">
            Cancel
          </Button>
          <Button className="w-[120px] h-9 rounded-xl text-sm font-semibold" type="submit">
            Save
          </Button>
          </div>
          
        </form>
      </Form>
    </div>
  );
}

export default OrgDetail;
