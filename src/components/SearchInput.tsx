import { Search } from "lucide-react";
import { Input } from "./ui/input";

interface SearchProps {
  onSearch: (term: string) => void;
}

const SearchInput = ({ onSearch }: SearchProps) => {
  return (
    <div className="relative w-full max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder="Search questions here..."
        className="pl-10"
      />
    </div>
  );
};

export default SearchInput;
