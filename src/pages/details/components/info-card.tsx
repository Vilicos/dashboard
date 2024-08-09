import Github from "@assets/icons/github";
import XTwitter from "@assets/icons/x-twitter";
import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Badge } from "@components/ui/badge";
import { Button } from "@components/ui/button";
import CustomTooltip from "@components/ui/custom-tooltip";
import { Separator } from "@components/ui/separator";
import { CircleX, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

function InfoCard() {
  return (
    <section className="flex *:h-[100px] items-center">
      <div className="bg-card rounded-md p-4 border shadow-md w-fit relative overflow-hidden">
        <div className="flex items-center space-x-3">
          <Avatar className="size-16 overflow-hidden ">
            <AvatarImage src="/img/btc.png" alt="Bitcoin" className="object-cover w-full h-full" />
            <AvatarFallback className="border bg-transparent"></AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-start space-x-1">
              <h1 className="text-2xl font-semibold">Bitcoin</h1>
              <small className="text-xs dark:text-gray-400 text-gray-500 mt-0.5 font-medium">BTC</small>
            </div>
            <div className="flex items-center w-fit h-4">
              <span className="text-sm rounded-md text-muted-foreground leading-none ">#1 in Market Cap Rank</span>
              <Separator orientation="vertical" className="mx-2 bg-zinc-600" />
              <div className="flex items-center space-x-2">
                <div className="p-1.5 bg-gray-100 dark:bg-zinc-700 rounded-full cursor-pointer">
                  <Link to={"/"} target="_blank" rel="noreferrer">
                    <Globe className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </Link>
                </div>
                <div className="p-1.5 bg-gray-100 dark:bg-zinc-700 rounded-full cursor-pointer">
                  <Link to={"/"} target="_blank" rel="noreferrer">
                    <XTwitter className="size-4 text-muted-foreground hover:text-foreground transition-colors fill-muted-foreground hover:fill-foreground" />
                  </Link>
                </div>
                <div className="p-1.5 bg-gray-100 dark:bg-zinc-700 rounded-full cursor-pointer">
                  <Link to={"/"} target="_blank" rel="noreferrer">
                    <Github className="size-4 text-muted-foreground hover:text-foreground transition-colors fill-muted-foreground hover:fill-foreground" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex absolute top-2 right-2 items-center space-x-1">
          <CustomTooltip content="Ignore" position="left" contentClass="text-xs">
            <Button variant={"outline"} size={"icon"} className="size-7 p-1.5">
              <CircleX className="w-full h-full" />
            </Button>
          </CustomTooltip>
          <CustomTooltip content="Add to favorites" position="right" contentClass="text-xs">
            <Button variant={"outline"} className="size-7 p-1.5">
              <Star className="w-full h-full" />
            </Button>
          </CustomTooltip>
        </div>
      </div>
      <div className="bg-card rounded-md p-4 border shadow-md relative overflow-hidden w-[300px]">
        <p className="font-medium text-sm">Categories:</p>
        <div className="h-[50px] line-clamp-2 flex flex-wrap gap-1 mt-0.5">
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
          <Badge variant="outline">Layer 1</Badge>
        </div>
      </div>
    </section>
  );
}

export default InfoCard;
