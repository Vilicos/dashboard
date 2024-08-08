import {Component, FileText, House, Waypoints } from "lucide-react";

export const navList = [
    {
        id:0,
        name:"Crypto Coins",
        path:'/',
        icon:<House className="size-5 shrink-0 block"/>
    },
    {
        id:1,
        name:"Protocols",
        path:'protocols',
        icon:<Waypoints className="size-5 shrink-0 block"/>
    },
    {
        id:2,
        name:"Pools",
        path:'pools',
        icon:<Component className="size-5 shrink-0 block"/>
    },
    {
        id:3,
        name:"Governance",
        path:'governance',
        icon:<FileText className="size-5 shrink-0 block"/>
    },
] as const