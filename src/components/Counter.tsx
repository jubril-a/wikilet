import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { useSearchStore } from "../stores/searchStore";

type CounterProps = {
  type: "Adults" | "Children" | "Rooms";
  min?: number;
  max?: number;
  defaultValue?: number;
};

export default function Counter({ type, min = 0, max = 10, defaultValue = 0 }: CounterProps) {
  const [count, setCount] = useState(defaultValue);
  const { setAdults, setChildren, setRooms } = useSearchStore();

  function handleChange(newCount: number) {
    setCount(newCount);

    if (type === "Adults") setAdults(newCount);
    else if (type === "Children") setChildren(newCount);
    else if (type === "Rooms") setRooms(newCount);
  }

  return (
    <div className="flex items-center rounded-md border border-neutral-700 bg-primary-1 overflow-hidden">
      <button
        onClick={() => handleChange(Math.max(min, count - 1))}
        disabled={count <= min}
        className="w-12 h-12 flex items-center justify-center text-neutral-300
          hover:bg-white/10 active:scale-95
          disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <MinusIcon className="size-4" />
      </button>

      <div className="w-px h-7 bg-neutral-700" />

      <span className="min-w-14 text-center text-md text-neutral-100 select-none">
        {count}
      </span>

      <div className="w-px h-7 bg-neutral-700" />

      <button
        onClick={() => handleChange(Math.min(max, count + 1))}
        disabled={count >= max}
        className="w-12 h-12 flex items-center justify-center text-neutral-300
          hover:bg-white/10 active:scale-95
          disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <PlusIcon className="size-4" />
      </button>
    </div>
  );
}