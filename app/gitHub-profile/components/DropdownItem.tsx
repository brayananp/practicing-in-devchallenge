/* eslint-disable @next/next/no-img-element */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

interface DropdownItemProps {
  readonly name: string | null;
  readonly description: string | null;
  readonly image_url: string;
  readonly handleData: () => void;
  readonly handleClose: () => void;
}
export default function DropdownItem({
  name,
  description,
  image_url,
  handleData,
  handleClose,
}: DropdownItemProps) {
  return (
    <button
      className="flex items-center gap-x-4 p-3 w-full text-left hover:bg-white/5 transition-colors duration-200"
      onClick={() => {
        handleData();
        handleClose();
      }}
    >
      <Avatar className="h-16 w-16 rounded-lg">
        <AvatarImage src={image_url} alt={name || "user"} className="object-cover" />
        <AvatarFallback className="rounded-lg bg-muted text-muted-foreground">
          {name?.substring(0, 2).toUpperCase() || "GH"}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <h3 className="text-[#CDD5E0] text-lg font-semibold truncate">
          {name}
        </h3>
        <p className="text-[#909193] text-sm line-clamp-2">
          {description || "No bio available"}
        </p>
      </div>
    </button>
  );
}
