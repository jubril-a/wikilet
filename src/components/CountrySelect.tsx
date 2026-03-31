"use client";

import Select from "react-select";
import countries from "world-countries";

const options = countries.map((c) => ({
  value: c.cca2,
  label: c.name.common,
}));

export default function CountrySelect() {
  return <Select options={options} placeholder="Select a country" />;
}