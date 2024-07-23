import Github from "@assets/icons/github";
import Logo from "@assets/icons/logo";
import { navList } from "@constants/nav-list";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed left-0 top-0 bottom-0 z-30 bg-card/50 border-r shadow-sm backdrop-blur-sm h-full w-[72px] hover:w-52 py-3 flex flex-col gap-y-4 transition-width overflow-hidden group">
      <div className="flex items-center gap-x-2 font-bold text-primary px-2">
        <div>
          <Logo className="size-14" />
        </div>
        <p className="text-2xl group-hover:opacity-100 group-hover:visible opacity-0 invisible transition">Lazarus⍛</p>
      </div>
      <ul className="px-4">
        {navList.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/80 hover:text-primary-foreground"
                } py-2 pl-2.5 pr-2 w-full flex items-center gap-x-2 rounded-md overflow-hidden my-2 transition`
              }
            >
              {item.icon}
              <span className="text-left text-sm font-medium truncate hidden group-hover:block grow">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="px-4 mt-auto">
        <Link
          to="https://github.com/Nijat-Hamid/lazarus-fullstack-web3-app"
          target="_blank"
          rel="noreferrer"
          className="bg-black/90 dark:bg-white/20 text-white/90 hover:bg-black/70 dark:hover:bg-white/40
               py-2 pl-[9px] pr-2 w-full flex items-center gap-x-2 rounded-md overflow-hidden my-2 transition"
        >
          <Github className="size-5 shrink-0 block" />
          <span className="text-left text-sm font-medium truncate hidden group-hover:block grow">Repository</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
