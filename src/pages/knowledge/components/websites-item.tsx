import { Link } from "react-router-dom"
import WebsiteSync from "./website-sync"
import RemoveDialog from "@components/shared/remove-dialog"
import { formatDistanceToNow } from "date-fns";

function WebsiteItem({id,name,modified,source_count}:{id:number;name:string;modified:string;source_count:number}) {

  const agoDate = formatDistanceToNow(new Date(modified),{addSuffix:true})
  return (
    <div className="flex items-center justify-between px-3 py-5 rounded-lg">
        <Link to={`knowledge/${id}`} className="flex items-center gap-x-2 hover:underline">
            <img src="/svg/globe.svg" alt="Site" className="pointer-events-none size-5 shrink-0" />
            <p className="font-medium text-sm w-36 truncate">{name}</p>
        </Link>
        <p className="font-medium text-sm text-brand-fifth">{source_count} pages, updated {agoDate}</p>
        <div className="flex items-center gap-x-5">
        <WebsiteSync id ={id}/>
        <RemoveDialog type="website" id={id}/>
        </div>
    </div>
  )
}

export default WebsiteItem