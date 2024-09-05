import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { ScrollArea } from "@components/ui/scroll-area";
import { Separator } from "@components/ui/separator";
import { TabsContent } from "@components/ui/tabs";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

type ChatsAnswer = {
  value: string;
};
function ChatsAnswer({ value }: ChatsAnswer) {
  const reply = false
  return (
    <>
      <TabsContent value={value}>
        <div className="flex items-center justify-between">
          <span className="font-bold text-xl">general</span>
          <Button className="rounded-xl w-[140px] h-9 mr-2" variant={"brand"}>
            Closed Ticket
          </Button>
        </div>
        <Separator className="mt-4 mb-5" />
        <ScrollArea type="always" className={`overflow-y-auto scrollbar-thin scrollbar-thumb-secondary/50 scrollbar-track-transparent h-[calc(100vh-280px)] pr-3`}>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              !reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              !reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              !reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              !reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              !reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
          <div className="px-3 py-5 even:bg-background rounded-lg">
            {
              !reply && <div className="flex items-center gap-x-2 mb-2 ml-14">
              <img src="/svg/reply-icon.svg" alt="Reply" className="size-[22px] overflow-hidden object-cover"/>
              <Avatar className="size-5 overflow-hidden shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                <AvatarFallback className="bg-background border"></AvatarFallback>
              </Avatar>
              <span className="truncate max-w-[150px] inline-block font-medium text-sm text-primary">Parviz19:</span>
              <span className="text-sm font-medium">Any admin online here?</span>
            </div>
            }
            <div className="flex items-center justify-between">
              <div className={`items-start flex  gap-x-2`}>
                <Avatar className="size-12 overflow-hidden shrink-0">
                  <AvatarImage src="https://github.com/shadcn.png" className="object-cover" alt="Nijat Hamid" />
                  <AvatarFallback className="bg-background border"></AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-primary font-medium text-base flex items-center flex-nowrap gap-x-2 leading-tight">
                    <span className="truncate max-w-[150px] inline-block">Ermak22 </span>
                    <span className="text-secondary">{dayjs(1725032726 * 1000).format("DD.MM.YYYY, HH:mm")}</span>
                  </div>
                  <p className="text-sm font-medium max-w-[280px] truncate my-2 leading-tight">Why I can’t add this? When i’ll shoü my sh</p>
                </div>
              </div>
              <Link
                to={""}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 flex-nowrap text-sm font-semibold bg-primary justify-center w-[100px] h-9 rounded-xl hover:bg-brand-secondary transition-colors"
              >
                <img src="/svg/discord.svg" alt="Discord" className="pointer-events-none w-6 h-[18px] shrink-0" />
                Open
              </Link>
            </div>
          </div>
        </ScrollArea>
      </TabsContent>
    </>
  );
}

export default ChatsAnswer;
