import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        type="text"
        placeholder="Search questions here..."
        className="pl-10"
      />
    </div>
  );
};

export default SearchInput;
