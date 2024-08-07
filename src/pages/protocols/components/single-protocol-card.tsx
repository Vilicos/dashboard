import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Toggle } from "@components/ui/toggle";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

function SingleProtocolCard() {
  const test = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="bg-card p-4 rounded-md h-74 overflow-hidden max-w-72 text-center relative shadow-md">
      <Avatar className="size-16  overflow-hidden shrink-0 mx-auto">
        <AvatarImage src="" alt="Bitcoin" />
        <AvatarFallback className="border bg-transparent"></AvatarFallback>
      </Avatar>
      <h3 className="mt-2 mb-1 truncate max-w-32 mx-auto font-medium text-lg">Title</h3>
      <div className="border dark:border-zinc-700 border-zinc-300 rounded-md py-2 px-4 max-w-60 mx-auto text-xs text-left space-y-2">
        <div className="flex items-center justify-between">
          <span>Market Cap:</span>
          <span>28382383</span>
        </div>
        <div className="flex items-center justify-between">
          <span>TVL:</span>
          <span>28382383</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Daily Change:</span>
          <span>28382383</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Blockchains:</span>
          <div className="flex items-center -space-x-1">
          {test.slice(0,3).map((item) => (
            <Avatar className="size-5 overflow-hidden" key={item}>
              <AvatarImage src="" alt="Bitcoin" />
              <AvatarFallback className="border bg-transparent"></AvatarFallback>
            </Avatar>
          ))}
          <Avatar className="size-5 overflow-hidden">
              <AvatarImage src="" alt="Bitcoin" />
              <AvatarFallback className="border text-[10px] bg-transparent">+{test.length-3}</AvatarFallback>
            </Avatar>
          </div>
          
        </div>
        <div className="flex items-center justify-between">
          <span>Audit:</span>
          <span>28382383</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Listed At:</span>
          <span>28382383</span>
        </div>
      </div>
      <Button asChild variant="outline" className="cursor-pointer mt-2 py-1 px-4 h-auto">
        <Link to="/">View</Link>
      </Button>
      <Toggle className="absolute top-3 right-2 p-1 rounded-md h-auto">
        <Star size={20}/>
      </Toggle>
    </div>
  );
}

export default SingleProtocolCard;
