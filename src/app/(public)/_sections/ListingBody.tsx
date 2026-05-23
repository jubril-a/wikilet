'use client'

import FilterBar from "../../../features/search/components/FilterBar";
import Section from "../../../components/layout/Section";
import { useState } from "react";
import DetailedPropertyCard from "@/src/features/property/components/DetailedPropertyCard";
import ListingsHead from "@/src/app/(public)/listings/ListingsHead";
import { PropertyCardType } from "@/src/types/property";

export default function ListingBody({properties}: {properties: PropertyCardType[]}) {

  const filterState = useState(false)

  return (
    <Section> 
        <div className="flex gap-12">
            <FilterBar state={filterState} />
            <div className="grow">
              <ListingsHead state={filterState} />
              <main className="grid gap-3 min-[580px]:gap-x-4 min-[580px]:gap-y-6 min-[480px]:grid-cols-2">
                {properties.map((property) => (
                  <DetailedPropertyCard key={property._id} property={property} />
                ))}
              </main>
            </div>
        </div>
    </Section>
  );
}