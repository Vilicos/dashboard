import { House, Target } from "lucide-react";

export const navList = [
    {
        id:0,
        name:"Crypto Tokens",
        path:'/',
        icon:<House className="size-5 shrink-0 block"/>
    },
    {
        id:1,
        name:"Pools",
        path:'pool',
        icon:<Target className="size-5 shrink-0 block"/>
    },
] as const