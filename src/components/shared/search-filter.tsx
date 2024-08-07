import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Search, X } from "lucide-react";
import { useState } from "react";

function SearchFilter() {
  const [searchValue, setSearchValue] = useState("");

  const handleClear = () => {
    setSearchValue("");
  };
  return (
    <div className="flex items-center space-x-4 ">
      <div className="w-56 relative overflow-hidden rounded-md shadow-md">
        <Label htmlFor="searchInput" className="hidden" />
        <Input
          id="searchInput"
          className="w-full pl-8 pr-8 text-sm text-gray-600 dark:text-gray-200  placeholder:text-sm placeholder:text-gray-500 placeholder:dark:text-gray-400 focus-visible:transition peer placeholder:font-medium font-medium bg-card"
          autoComplete="off"
          type="text"
          placeholder="Search..."
          aria-label="Search for Assets"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <Search strokeWidth={3} className="absolute z-10 size-4 top-1/2 left-5 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        {searchValue && (
          <Button
            variant={"ghost"}
            onClick={handleClear}
            size={"icon"}
            className="absolute z-10 size-4 top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 group bg-transparent hover:bg-transparent "
          >
            <X strokeWidth={3} className=" text-gray-500 dark:text-gray-400 cursor-pointer group-hover:text-gray-600 dark:group-hover:text-gray-300  transition-colors" />
          </Button>
        )}
      </div>
      <Select>
        <SelectTrigger className="w-40 shadow-md bg-card">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SearchFilter;
