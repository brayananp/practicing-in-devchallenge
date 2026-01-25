"use client";
import { Country, FilterRegion, FilterStatus } from "@/types/country";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDebounce } from "use-debounce";

type CountriesContextType = {
  countries: Country[];
  handleQueryChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChangeRegions: (e: ChangeEvent<HTMLInputElement>) => void;
  status: FilterStatus;
  regions: FilterRegion;
};
const initialValue: CountriesContextType = {
  countries: [],
  handleQueryChange: () => {},
  handleSortChange: () => {},
  handleCheckboxChange: () => {},
  handleCheckboxChangeRegions: () => {},
  status: {
    independent: false,
    un: false,
  },
  regions: {
    africa: false,
    americas: false,
    antarctic: false,
    asia: false,
    europe: false,
  },
};

export const CountriesContext =
  createContext<CountriesContextType>(initialValue);

export const ProviderCountries = ({ children }: { children: ReactNode }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [query, setQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"name" | "population" | "area">(
    "population"
  );
  const [status, setStatus] = useState<FilterStatus>({
    independent: false,
    un: false,
  });
  const [regions, setRegions] = useState<FilterRegion>({
    americas: false,
    antarctic: false,
    africa: false,
    asia: false,
    europe: false,
  });

  const [debouncedQuery] = useDebounce(query, 500);
  const fetchDataCountries = async () => {
    try {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,population,area,region,flags,subregion,independent,unMember"
      );
      const data = await res.json();
      if (Array.isArray(data)) {
        setCountries(data);
      } else {
        console.error("Data is not an array:", data);
      }
    } catch (error) {
      console.error("Failed to fetch countries:", error);
    }
  };
  useEffect(() => {
    fetchDataCountries();
  }, []);

  const handleQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);
  const handleSortChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as "name" | "population" | "area");
  }, []);

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setStatus({
        ...status,
        [event.target.name]: event.target.checked,
      });
    },
    [status]
  );
  const handleCheckboxChangeRegions = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRegions({
        ...regions,
        [event.target.name]: event.target.checked,
      });
    },
    [regions]
  );

  const filteredCountries = useMemo(() => {
    if (!Array.isArray(countries)) return [];
    let filtered = countries;

    if (debouncedQuery !== "") {
      const lowercaseQuery = debouncedQuery.toLowerCase();
      filtered = filtered.filter((country) => {
        const { name, region, subregion } = country;
        const lowercaseName = name?.common?.toLowerCase() || "";
        const lowercaseRegion = region?.toLowerCase() || "";
        const lowercaseSubregion = subregion?.toLowerCase() || "";

        return (
          lowercaseName.includes(lowercaseQuery) ||
          lowercaseRegion.includes(lowercaseQuery) ||
          lowercaseSubregion.includes(lowercaseQuery)
        );
      });
    }

    filtered = [...filtered].sort((a: Country, b: Country) => {
      if (sortBy === "name") {
        return (a.name?.common ?? "").localeCompare(b.name?.common ?? "", "en");
      } else if (sortBy === "population") {
        return (b.population ?? 0) - (a.population ?? 0);
      } else {
        return (b.area ?? 0) - (a.area ?? 0);
      }
    });

    const selectedRegions = Object.entries(regions)
      .filter(([region, selected]) => selected)
      .map(([region]) => region.toUpperCase());

    if (selectedRegions.length > 0) {
      filtered = filtered.filter((country) =>
        selectedRegions.includes(country?.region?.toUpperCase())
      );
    }

    filtered = filtered.filter((country) => {
      if (status.independent && status.un) {
        return country.independent && country.unMember;
      }
      if (status.independent) {
        return country.independent;
      }
      if (status.un) {
        return country.unMember;
      }
      return true;
    });

    return filtered;
  }, [countries, debouncedQuery, sortBy, status, regions]);

  const value = useMemo(() => {
    return {
      countries: filteredCountries,
      handleQueryChange,
      handleSortChange,
      handleCheckboxChange,
      handleCheckboxChangeRegions,
      status,
      regions,
    };
  }, [
    filteredCountries,
    handleSortChange,
    handleQueryChange,
    handleCheckboxChange,
    handleCheckboxChangeRegions,
    status,
    regions,
  ]);

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => useContext(CountriesContext);
