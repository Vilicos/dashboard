import { Link } from "react-router-dom"
import WebsiteSync from "./website-sync"
import RemoveDialog from "@components/shared/remove-dialog"

function WebsiteItem({id}:{id:number}) {
  return (
    <div className="flex items-center justify-between px-3 py-5 rounded-lg">
        <Link to={''} className="flex items-center gap-x-2 hover:underline">
            <img src="/svg/globe.svg" alt="Site" className="pointer-events-none size-5 shrink-0" />
            <p className="font-medium text-sm w-36 truncate">remox.io{" "}{id}</p>
        </Link>
        <p className="font-medium text-sm text-brand-fifth">2 pages, updated 5 min ago</p>
        <div className="flex items-center gap-x-5">
        <WebsiteSync/>
        <RemoveDialog type="website"/>
        </div>
    </div>
  )
}

export default WebsiteItem