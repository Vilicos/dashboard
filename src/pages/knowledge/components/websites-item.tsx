import { Link } from "react-router-dom"
import WebsiteSync from "./website-sync"
import RemoveDialog from "@components/shared/remove-dialog"
import { formatDistanceToNow } from "date-fns";

function WebsiteItem({id,name,modified,source_count,isAnalyzed}:{id:number;name:string;modified:string;source_count:number;isAnalyzed:boolean}) {

  const agoDate = formatDistanceToNow(new Date(modified),{addSuffix:true})
  return (
    <div className="flex items-center justify-between px-3 py-5 rounded-lg">
        <Link to={`knowledge/${id}`} className={`flex items-center gap-x-2 hover:underline basis-1/3 overflow-hidden ${!isAnalyzed && "pointer-events-none"}`}>
            <img src="/svg/globe.svg" alt="Site" className="pointer-events-none size-5 shrink-0" />
            <p className="font-medium text-sm truncate">{name}</p>
        </Link>
        <p className="font-medium text-sm text-brand-fifth basis-1/3 text-left truncate">
        {
          isAnalyzed ? `${source_count} pages, updated ${agoDate}` : "Updating..."
        }
        </p>
        <div className="flex items-center gap-x-5">
        <WebsiteSync id ={id} isAnalyzed={isAnalyzed}/>
        <RemoveDialog type="website" id={id}/>
        </div>
    </div>
  )
}

export default WebsiteItem