import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { TabsTrigger } from "@components/ui/tabs";
import dayjs from "dayjs";

type ChatsQuestions = {
    value:string
}

function ChatsQuestion({value}:ChatsQuestions) {
  return (
    <TabsTrigger
      value={value}
      className="w-full justify-start text-left rounded-lg pt-2 px-3 pb-3 data-[state=active]:bg-brand-chats-questions data-[state=active]:hover:!bg-brand-chats-questions hover:bg-brand-chats-questions even:bg-background odd:bg-transparent"
    >
      <div className="flex items-start gap-x-2">
        <Avatar className="size-12 overflow-hidden shrink-0">
          <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
          <AvatarFallback className="bg-background border"></AvatarFallback>
        </Avatar>
        <div>
          <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
            <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
            <span className="text-sm text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
          </div>
          <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
          <span className="font-medium text-brand-fifth text-sm leading-tight">Channel: general</span>
        </div>
      </div>
    </TabsTrigger>
  );
}

export default ChatsQuestion;
