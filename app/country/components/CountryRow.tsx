/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Country } from "@/types/country";
import { TableCell, TableRow } from "@/components/ui/table";

interface CountryRowProps {
  readonly country: Country;
}

export default function CountryRow({ country }: CountryRowProps) {
  return (
    <TableRow className="text-sm font-bold text-[#D2D5DA] border-none hover:bg-white/5 transition-colors cursor-pointer group">
      <TableCell className="py-4">
        <Link href={`/country/${country.name.common}`} className="contents">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="rounded-sm w-12 h-8 object-cover"
          />
        </Link>
      </TableCell>
      <TableCell className="font-medium">
        <Link
          href={`/country/${country.name.common}`}
          className="hover:underline"
        >
          {country.name.common}
        </Link>
      </TableCell>
      <TableCell>{country.population.toLocaleString()}</TableCell>
      <TableCell>{country.area.toLocaleString()}</TableCell>
      <TableCell className="text-center">{country.region}</TableCell>
    </TableRow>
  );
}
