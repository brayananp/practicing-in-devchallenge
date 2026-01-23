import DropdownItem from "./DropdownItem";
import { Card } from "@/components/ui/Card";

interface DropdownProps {
  readonly results: any;
  readonly handleData: () => void;
  readonly handleClose: () => void;
}
export default function Dropdown({
  results,
  handleData,
  handleClose,
}: DropdownProps) {
  if (!results || results.message === "Not Found") {
    return (
      <Card className="mt-2 w-full bg-[#20293A] border-none p-4 text-[#CDD5E0] shadow-xl">
        <p className="text-sm">No users found.</p>
      </Card>
    );
  }

  return (
    <Card className="mt-2 w-full bg-[#20293A] border-none rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
      <div className="flex flex-col max-h-72 overflow-y-auto">
        <DropdownItem
          name={results?.name || results?.login}
          description={results?.bio}
          image_url={results?.avatar_url}
          handleData={handleData}
          handleClose={handleClose}
        />
      </div>
    </Card>
  );
}
