import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/ui/Input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface InputSearchProps {
  readonly handleSearchChange: (value: string) => void;
  readonly searchQuery: string;
  readonly fetchData: (username: string) => void;
  readonly handleOpen: () => void;
}
export default function InputSearch({
  handleSearchChange,
  searchQuery,
  fetchData,
  handleOpen,
}: InputSearchProps) {
  const [debouncedValue] = useDebounce(searchQuery, 1000);

  useEffect(() => {
    let isMounted = true;

    const fetchDataAfterDebounce = async () => {
      try {
        if (debouncedValue) {
          fetchData(debouncedValue);
          handleOpen();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (debouncedValue && isMounted) {
      fetchDataAfterDebounce();
    }

    return () => {
      isMounted = false;
    };
  }, [debouncedValue, fetchData, handleOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleSearchChange(e.target.value);
  };

  const handleClear = () => {
    handleSearchChange("");
  };

  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
        <Search className="h-5 w-5 text-[#364153] group-focus-within:text-primary transition-colors" />
      </div>
      <Input
        className="block bg-[#20293A] w-full rounded-xl border-none py-6 pl-12 pr-12 shadow-lg focus-visible:ring-2 focus-visible:ring-primary text-base text-[#CDD5E0] font-medium placeholder:text-[#364153]"
        placeholder="Search username"
        type="text"
        name="search"
        value={searchQuery}
        onChange={handleChange}
      />
      {searchQuery && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute inset-y-0 right-2 h-full text-[#364153] hover:text-white hover:bg-transparent"
          onClick={handleClear}
        >
          <X className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
