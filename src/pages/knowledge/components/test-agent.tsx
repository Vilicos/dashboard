import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Send from "@assets/icons/send";
import { ScrollArea } from "@components/ui/scroll-area";
import { useEffect, useRef, useState } from "react";
import TestAgentResponse from "./test-agent-response";

const FormSchema = z.object({
  questions: z.string({ invalid_type_error: "Ask only question", required_error: "Question must be required" }).min(2, {
    message: "Question must be at least 2 characters.",
  }),
});

function TestAgent() {
  const [chatConversation, setChatConversation] = useState<Array<{ id: number; role: "Agent" | "User"; message: Array<string> }>>([
    {
      id: 0,
      role: "Agent",
      message: [
        "👋 Hi, I am your support agent.",
        "Please keep in mind that the quality of my answers directly correlates with the information you provide.",
        "I'd love to chat with you.",
      ],
    },
  ]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode:"onSubmit",
    defaultValues: {
      questions: "",
    },
  });

  const lastMessageRef = useRef<HTMLDivElement>(null);

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    setChatConversation(conversation => [
      ...conversation,{
        id:conversation.length + 1,
        role:"User",
        message:[values.questions]
      }
    ])
    form.reset()
  };

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatConversation]);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"brand"} className="rounded-xl font-semibold text-sm w-[120px] h-9 disabled:bg-secondary">
          Test Agent
        </Button>
      </DialogTrigger>
      <DialogContent className="border max-w-[600px] py-5 px-4 h-[700px] bg-card" closeClassName="top-6">
        <DialogHeader className="after:absolute after:h-px after:w-full after:top-14 after:left-0 after:bg-border">
          <DialogTitle className="font-bold text-xl">Vilicos AI Agent</DialogTitle>
          <VisuallyHidden>
            <DialogDescription></DialogDescription>
          </VisuallyHidden>
        </DialogHeader>
        <ScrollArea className={`overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-transparent pr-3 h-full ${chatConversation.length <=1 ? "mt-24":"mt-5 mb-1.5"}`}>
          {chatConversation.map((chat,index) => (
            <div key={chat.id} ref={index === chatConversation.length - 1 ? lastMessageRef : null}>
              <TestAgentResponse chat={chat} />
            </div>
          ))}
        </ScrollArea>
        <DialogFooter className="sm:justify-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full relative">
              <FormField
                control={form.control}
                name="questions"
                render={({ field }) => (
                  <FormItem className="relative">
                    <VisuallyHidden>
                      <FormLabel>Ask Questions</FormLabel>
                    </VisuallyHidden>
                    <FormMessage className="absolute !text-xs -top-8 left-3" />
                    <FormControl>
                      <Input
                        placeholder="Ask a question..."
                        {...field}
                        className="rounded-[32px] bg-transparent h-[60px] py-0 pl-5 pr-14 placeholder:text-xl placeholder:text-input placeholder:font-medium text-md"
                      />
                    </FormControl>
                    <VisuallyHidden>
                      <FormDescription>Ask questions to AI Chatbot</FormDescription>
                    </VisuallyHidden>
                  </FormItem>
                )}
              />
              <Button type="submit" className="absolute bottom-4 right-3.5 bg-transparent hover:bg-transparent p-0 size-7 z-10">
                <Send className="hover:fill-brand-secondary transition-colors" />
              </Button>
            </form>
          </Form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TestAgent;
