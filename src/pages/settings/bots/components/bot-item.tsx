import { Button } from "@components/ui/button";
import { Link } from "react-router-dom";
import EditBot from "./edit-bot";

interface IProps {
  img: string;
  name: string;
  active: boolean;
  slug: string;
  enable: boolean;
}

function BotItem({ active, img, name, enable }: IProps) {
  return (
    <div className="bg-card h-[180px] border rounded-lg basis-1/3 overflow-hidden p-7 flex flex-col items-center justify-center">
      <img src={img} alt={name} className="size-10 rounded-full object-cover bg-primary" />
      <p className="font-semibold mt-2 mb-5">{name}</p>
      {active ? (
        <EditBot>
          <Button className="h-8 w-[90px] rounded-lg font-normal" variant={'brand'}>Edit</Button>
        </EditBot>
        
      ) : (
        <Link to={""} target="_blank" className={`${enable ? "bg-primary hover:bg-brand-secondary" : "bg-muted pointer-events-none opacity-50"} flex items-center justify-center rounded-lg h-8 w-[90px] text-sm transition-colors `}>
          {
            enable ? "Activate": "Soon"
          }
        </Link>
      )}
    </div>
  );
}

export default BotItem;
