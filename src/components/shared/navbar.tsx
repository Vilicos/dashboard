import { navList } from "@constants/static-data";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-full">
      <ul className="space-y-4">
        {navList.map((item) =>
          item.parent ? (
            <li key={item.id}>
              <span className={`py-1 px-3 font-medium flex items-center gap-x-3 mb-3`}>
                <img src={item.img} alt={item.name} className="size-[22px] shrink-0" />
                {item.name}
              </span>
              {item.children.map((child) => (
                <NavLink
                  key={child.id}
                  to={child.path}
                  className={({ isActive }) =>
                    `${
                      isActive && "bg-background"
                    } ${child.disabled ? "pointer-events-none text-gray-500":"hover:bg-background "} transition-colors rounded-xl py-[6px] pr-4 pl-[46px] my-1 font-medium flex items-center justify-between text-sm`
                  }
                >
                  {child.name}
                 {
                  (item.id === 0 && !child.disabled) &&  <span>2</span>
                 }
                 {
                  child.disabled && <span className="text-xs border px-1 rounded-xl border-gray-500">soon</span>
                 }
                </NavLink>
              ))}
            </li>
          ) : (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => `${isActive && "bg-background"} ${item.disabled ? "pointer-events-none text-gray-500":"hover:bg-background "} hover:bg-background transition-colors rounded-xl py-1 px-3 font-medium flex items-center gap-x-3 overflow-hidden`}
              >
                <img src={item.img} alt={item.name} className="size-[22px] shrink-0" />
                {item.name}
                {
                  item.disabled && <span className="text-xs border px-1 rounded-xl border-gray-500">soon</span>
                }
              </NavLink>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
