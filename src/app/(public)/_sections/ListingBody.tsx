'use client'

import FilterBar from "../../../features/search/components/FilterBar";
import Section from "../../../components/layout/Section";
import { useState } from "react";
import DetailedPropertyCard from "@/src/features/property/components/DetailedPropertyCard";
import ListingsHead from "@/src/app/(public)/listings/ListingsHead";

export default function ListingBody() {

    const filterState = useState(false)

  return (
    <Section> 
        <div className="flex gap-12">
            <FilterBar state={filterState} />
            <div className="grow">
              <ListingsHead state={filterState} />
              <main className="grid gap-3 min-[580px]:gap-4 min-[480px]:grid-cols-2">
                <DetailedPropertyCard />
                <DetailedPropertyCard />
                <DetailedPropertyCard />
                <DetailedPropertyCard />
                <DetailedPropertyCard />
                <DetailedPropertyCard />
                <DetailedPropertyCard />
                <DetailedPropertyCard />
              </main>
            </div>
        </div>
    </Section>
  );
}