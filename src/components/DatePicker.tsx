"use client";


import { ChevronDownIcon } from "@heroicons/react/16/solid"
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Calendar() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <div className="p-4 mt-2 absolute left-1/2 -translate-x-1/2 z-50 bg-white rounded-lg shadow">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
      />
    </div>
  );
}

export default function DatePicker() {
    const [visible, setVisibility] = useState(false)

    return (
        <div className="relative">
            <div className="px-5 py-3 cursor-pointer flex items-center justify-between gap-3 rounded-md border border-neutral-700 bg-primary-1 hover:bg-primary-1/90" onClick={() => {setVisibility(!visible)}}>
                <span className="text-sm text-neutral-100">Select Date</span>
                <ChevronDownIcon className="size-6 text-white" />
            </div>
            {visible && <Calendar />}
        </div>
    )
}
