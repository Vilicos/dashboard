import { ScrollArea } from "@components/ui/scroll-area";
import ChatsSelect from "./chats-select";
import { Tabs, TabsList } from "@components/ui/tabs";
import ChatsQuestion from "./chats-question";
import ChatsAnswer from "./chats-answer";
import { useState } from "react";
import ChatsNoResponse from "./chats-no-response";

function Chats() {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  console.log(activeTab);
  return (
    <section className="mt-5 bg-card  pl-5 pr-3 border rounded-lg h-[calc(100vh-152px)] overflow-hidden">
      <Tabs className="grid grid-cols-[412px_1fr] h-full" onValueChange={setActiveTab}>
        <div className="pr-1 py-5">
          <p className="font-bold text-xl">Chats</p>
          <div className="mt-5 mb-8 flex items-center gap-x-8">
            <ChatsSelect />
          </div>
          {/* <ChatsNoResponse type="Questions"/> */}
          <ScrollArea type="always" className={`overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-transparent h-[calc(100vh-320px)] pr-4`}>
            <TabsList className="w-full bg-transparent justify-start h-full p-0 flex-col space-y-5">
              <ChatsQuestion value="1" />
              <ChatsQuestion value="2" />
              <ChatsQuestion value="3" />
              <ChatsQuestion value="4" />
              <ChatsQuestion value="5" />
              <ChatsQuestion value="6" />
              <ChatsQuestion value="7" />
            </TabsList>
          </ScrollArea>
        </div>
        <div className="pl-4 relative before:absolute before:h-full before:w-px before:top-0 before:left-0 before:bg-border py-5">
          {activeTab ? (
            <>
              <ChatsAnswer value="1" />
              <ChatsAnswer value="2" />
            </>
          ) : (
            <ChatsNoResponse type="Answers" />
          )}
        </div>
      </Tabs>
    </section>
  );
}

export default Chats;
