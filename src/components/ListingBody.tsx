'use client'

import FilterBar from "./FilterBar";
import ListingsBar from "./ListingsBar";
import Section from "./Section";
import { useState } from "react";

export default function ListingBody() {

    const filterState = useState(false)

  return (
    <Section> 
        <div className="flex gap-12">
            <FilterBar state={filterState} />
            <ListingsBar state={filterState} />
        </div>
    </Section>
  );
}