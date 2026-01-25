import { useCountries } from "@/context/CountriesContext";
import cn from "@/utils/cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn-select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export default function ListFilters() {
  const {
    handleSortChange,
    status,
    handleCheckboxChange,
    regions,
    handleCheckboxChangeRegions,
  } = useCountries();

  const regionList = [
    { id: "americas", label: "Americas" },
    { id: "antarctic", label: "Antarctic" },
    { id: "africa", label: "Africa" },
    { id: "asia", label: "Asia" },
    { id: "europe", label: "Europe" },
  ];

  return (
    <aside className="w-[325px] space-y-8">
      <div className="">
        <p className="text-[#6C727F] text-sm font-semibold mb-2">Sort by</p>
        <Select onValueChange={handleSortChange} defaultValue="population">
          <SelectTrigger className="w-full bg-[#1B1D1F] border-[#282B30] text-white rounded-lg h-12">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="bg-[#1B1D1F] border-[#282B30] text-white">
            <SelectItem value="population">Population</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="area">Area</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="">
        <p className="text-[#6C727F] text-sm font-semibold mb-2">Region</p>
        <div className="flex gap-3 flex-wrap">
          {regionList.map((region) => (
            <Badge
              key={region.id}
              variant="outline"
              className={cn(
                "cursor-pointer px-4 py-2 border-none text-[#6C727F] hover:text-[#D2D5DA] transition-colors",
                regions[region.id as keyof typeof regions]
                  ? "bg-[#282B30] text-[#D2D5DA]"
                  : "bg-transparent"
              )}
              onClick={() =>
                handleCheckboxChangeRegions(
                  region.id,
                  !regions[region.id as keyof typeof regions]
                )
              }
            >
              {region.label}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-[#6C727F] text-sm font-semibold">Status</p>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="un"
            checked={status.un}
            onCheckedChange={(checked) =>
              handleCheckboxChange("un", checked === true)
            }
            className="border-[#6C727F] data-[state=checked]:bg-[#3662E3] data-[state=checked]:border-[#3662E3]"
          />
          <label
            htmlFor="un"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#D2D5DA] cursor-pointer"
          >
            Member of the United Nations
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="independent"
            checked={status.independent}
            onCheckedChange={(checked) =>
              handleCheckboxChange("independent", checked === true)
            }
            className="border-[#6C727F] data-[state=checked]:bg-[#3662E3] data-[state=checked]:border-[#3662E3]"
          />
          <label
            htmlFor="independent"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#D2D5DA] cursor-pointer"
          >
            Independent
          </label>
        </div>
      </div>
    </aside>
  );
}
