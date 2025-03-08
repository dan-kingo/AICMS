import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useLocation } from "react-router-dom";

interface SearchProps {
  onSearch: (term: string) => void;
  placeholder: string;
}

const SearchInput = ({ onSearch, placeholder }: SearchProps) => {
  const location = useLocation();
  let isDashboardPath = location.pathname.startsWith("/dashboard");
  return (
    <div className={`relative w-full ${isDashboardPath ? "" : "max-w-sm"} `}>
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        onChange={(e) => onSearch(e.target.value.toLowerCase())}
        type="text"
        placeholder={placeholder}
        className="pl-10"
      />
    </div>
  );
};

export default SearchInput;
