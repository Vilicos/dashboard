type IProps = {
  id:number;
  role:"Agent" | "User";
  message:Array<string>
}
function TestAgentResponse({ chat }: {chat:IProps}) {
  return (
    <div className={`flex items-start w-full gap-x-2 mb-2.5 ${chat.role === "User" && "justify-end"}`}>
      {
        chat.role === "Agent" &&  <img src="/img/logo-icon.png" alt="Agent" className="pointer-events-none size-8 shrink-0" />
      }
      <div className="bg-background rounded-xl p-3 max-w-[420px]">
        {chat.message.map((item, index) => (
          <>
            <p key={crypto.randomUUID()} className="text-sm font-medium text-brand-fifth">
              {item}
            </p>{" "}
            {(chat.role === "Agent" && index < chat.message.length - 1) && <br />}
          </>
        ))}
      </div>
    </div>
  );
}

export default TestAgentResponse;
