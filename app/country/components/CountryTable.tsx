import { useCountries } from "@/context/CountriesContext";
import CountryRow from "./CountryRow";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CountryTable() {
  const { countries } = useCountries();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b-2 border-[#282B30] hover:bg-transparent">
            <TableHead className="text-[#6C727F] text-[12px] font-medium pb-4 h-auto">
              Flag
            </TableHead>
            <TableHead className="text-[#6C727F] text-[12px] font-medium pb-4 h-auto">
              Name
            </TableHead>
            <TableHead className="text-[#6C727F] text-[12px] font-medium pb-4 h-auto">
              Population
            </TableHead>
            <TableHead className="text-[#6C727F] text-[12px] font-medium pb-4 h-auto">
              Area (Km<sup>2</sup>)
            </TableHead>
            <TableHead className="text-[#6C727F] text-[12px] font-medium pb-4 h-auto text-center">
              Region
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countries.map((country, index) => (
            <CountryRow
              key={`${country.name.common}-${index}`}
              country={country}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
