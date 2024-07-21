import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Search, X } from "lucide-react";
import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleClear = () => {
    setSearchValue("");
  };
  return (
    <div className="w-72 relative">
      <Label htmlFor="searchInput" className="hidden" />
      <Input
        id="searchInput"
        className="w-full h-9 pl-8 pr-8 text-sm text-gray-600 dark:text-gray-200 bg-inner-input placeholder:text-sm placeholder:text-gray-500 placeholder:dark:text-gray-400 focus-visible:transition peer placeholder:font-medium font-medium"
        autoComplete="off"
        type="text"
        placeholder="Search..."
        aria-label="Search for Assets"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Search strokeWidth={3} className="absolute z-10 size-4 top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
      {
        searchValue && <Button variant={"ghost"} onClick={handleClear} size={"icon"} className="absolute z-10 size-4 top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 group bg-transparent hover:bg-transparent ">
        <X strokeWidth={3} className=" text-gray-500 dark:text-gray-400 cursor-pointer group-hover:text-gray-600 dark:group-hover:text-gray-300  transition-colors" />
      </Button>
      }
      
    </div>
  );
}

export default SearchBar;
