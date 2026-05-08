"use client";

import Select from "react-select";
import countries from "world-countries";

const options = countries.map((c) => ({
  value: c.cca2,
  label: c.name.common,
}));

type Option = { value: string; label: string }

type Props = {
  value?: string;
  onChange?: (value: string) => void;
}

export default function CountrySelect({ value, onChange }: Props) {
  const selected = options.find((o) => o.value === value) ?? null

  return (
    <Select
      name="country"
      options={options}
      placeholder="Select a country"
      value={selected}
      onChange={(option) => onChange?.((option as Option).value)}
    />
  );
}