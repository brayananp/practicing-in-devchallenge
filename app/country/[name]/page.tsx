/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import { Country } from "@/types/country";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NamePage({ params }: { params: { name: string } }) {
  const [country, setCountry] = useState<Country | null>(null);
  const [borders, setBorders] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);

  const getCountry = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${params.name}?fullText=true`
      );
      if (!response.ok) throw new Error("Country not found");
      const data = await response.json();
      const countryData = data[0];
      setCountry(countryData);

      const codes = countryData.borders;
      if (codes && codes.length > 0) {
        const bordersResponse = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${codes.join(",")}&fields=name,flags`
        );
        const bordersData = await bordersResponse.json();
        setBorders(bordersData);
      } else {
        setBorders([]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [params.name]);

  useEffect(() => {
    getCountry();
  }, [getCountry]);

  if (loading)
    return (
      <div className="max-w-screen-xl min-h-screen bg-[#282B30] flex items-center justify-center text-[#D2D5DA]">
        <p className="animate-pulse">Loading country data...</p>
      </div>
    );

  if (!country)
    return (
      <div className="max-w-screen-xl min-h-screen bg-[#282B30] flex items-center justify-center text-[#D2D5DA]">
        <p>Country not found</p>
      </div>
    );

  return (
    <div className="max-w-screen-xl min-h-screen bg-[#282B30] pb-20 font-beVietnamPro">
      <Hero />
      <Card className="bg-[#1B1D1F] border-[#282B30] max-w-screen-sm mx-auto rounded-lg -mt-20 overflow-visible">
        <CardContent className="pt-0">
          <div className="flex flex-col justify-center items-center">
            <img
              src={country?.flags?.png}
              alt={`${country?.name?.common} flag`}
              className="h-[196px] w-[260px] -mt-10 rounded-lg shadow-xl object-cover"
            />
            <h1 className="text-[#D2D5DA] text-3xl mt-8 font-bold">
              {country?.name?.common}
            </h1>
            <p className="text-[#D2D5DA] text-base font-medium mt-2">
              {country?.name?.official}
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-6 mt-10 w-full px-4">
              <div className="bg-[#282B30] py-3 px-6 rounded-xl text-[#D2D5DA] flex-1 flex justify-between items-center">
                <span className="text-[#6C727F] text-sm">Population</span>
                <Separator orientation="vertical" className="h-4 bg-[#6C727F]/30 mx-2" />
                <span className="font-semibold">{country?.population.toLocaleString()}</span>
              </div>
              <div className="bg-[#282B30] py-3 px-6 rounded-xl text-[#D2D5DA] flex-1 flex justify-between items-center">
                <span className="text-[#6C727F] text-sm">
                  Area (km<sup>2</sup>)
                </span>
                <Separator orientation="vertical" className="h-4 bg-[#6C727F]/30 mx-2" />
                <span className="font-semibold">{country?.area.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-0">
            {[
              { label: "Capital", value: country?.capital },
              { label: "Subregion", value: country?.subregion },
              {
                label: "Language",
                value:
                  country?.languages &&
                  Object.values(country.languages).join(", "),
              },
              {
                label: "Currencies",
                value:
                  country?.currencies &&
                  Object.values(country.currencies)
                    .map((c: any) => c.name)
                    .join(", "),
              },
              {
                label: "Continents",
                value: country?.continents?.join(", "),
              },
            ].map((item, i) => (
              <React.Fragment key={item.label}>
                <Separator className="bg-[#282B30]" />
                <div className="flex justify-between px-4 py-5 items-center">
                  <span className="text-[#6C727F] font-medium">{item.label}</span>
                  <span className="text-[#D2D5DA] text-right">{item.value}</span>
                </div>
              </React.Fragment>
            ))}

            <Separator className="bg-[#282B30]" />
            <div className="px-4 py-6">
              <h3 className="text-[#6C727F] font-medium mb-6">
                Neighbouring Countries
              </h3>
              <div className="flex flex-row gap-4 flex-wrap">
                {borders.length > 0 ? (
                  borders.map((border) => (
                    <Link
                      href={`/country/${border.name.common}`}
                      key={border.name.common}
                      className="group flex flex-col gap-2 transition-transform hover:scale-105"
                    >
                      <img
                        src={border.flags.png}
                        alt={`${border.name.common} flag`}
                        className="h-[60px] w-[84px] rounded-md object-cover shadow-md"
                      />
                      <p className="text-center text-[#D2D5DA] text-xs group-hover:text-white transition-colors">
                        {border.name.common}
                      </p>
                    </Link>
                  ))
                ) : (
                  <p className="text-[#6C727F] text-sm">None</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
