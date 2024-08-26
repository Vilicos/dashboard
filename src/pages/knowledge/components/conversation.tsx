import ConversationItem from "./conversation-item";

function Conversation() {
  return (
    <section className="border py-5 pl-5 pr-2 bg-card rounded-lg flex items-start gap-x-3">
      <img src="/svg/conversation.svg" alt="Conversation" className="pointer-events-none size-7 shrink-0" />
      <div className="w-full">
        <div>
          <h2 className="font-bold text-xl">Conversation</h2>
          <p className="font-medium text-sm mt-1">Let AI agent use your community’s message history. </p>
        </div>
        <div className="space-y-2 mt-6 &>*:nth-child(odd)]:bg-transparent [&>*:nth-child(even)]:bg-background">
            <ConversationItem networkName="discord"/>
            <ConversationItem networkName="telegram"/>
            <ConversationItem networkName="webchat"/>
        </div>
      </div>
    </section>
  );
}

export default Conversation;
