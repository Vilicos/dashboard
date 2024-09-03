import { Avatar, AvatarFallback, AvatarImage } from "@components/ui/avatar";

function OrganizationCard() {
  return (
    <div className="border rounded-lg py-2 pl-3 pr-1 flex items-center space-x-2 h-10 overflow-hidden mt-7 mb-11">
      <Avatar className="size-6 overflow-hidden shrink-0">
        <AvatarImage src="https://github.com/shadcn.png" className="object-cover inline-block" alt="Nijat Hamid" />
        <AvatarFallback className="bg-background border"></AvatarFallback>
      </Avatar>
      <span className="truncate font-semibold">Nijat Hamid</span>
    </div>
  );
}

export default OrganizationCard;
