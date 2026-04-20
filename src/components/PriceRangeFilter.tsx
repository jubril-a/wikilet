import { useState } from "react";

export default function PriceRangeFilter({ heading = "Price range", min = 30000, max = 90000 }) {
  const [range, setRange] = useState([min, max]);

  const updateMin = (val: number) => {
    const v = Math.min(val, range[1] - 1);
    setRange([v, range[1]]);
  };
  const updateMax = (val: number) => {
    const v = Math.max(val, range[0] + 1);
    setRange([range[0], v]);
  };

  return (
    <div className="w-full rounded-md mb-3 p-3 bg-white">
      <h3 className="text-sm font-medium mb-4">{heading}</h3>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">₦</span>
          <input
            type="number"
            value={range[0]}
            min={min}
            max={range[1] - 1}
            onChange={(e) => updateMin(Number(e.target.value))}
            className="w-full pl-5 pr-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <span className="text-gray-400 text-sm">—</span>
        <div className="relative flex-1">
          <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-400">₦</span>
          <input
            type="number"
            // value={range[1]}
            min={range[0] + 1}
            // max={max}
            onChange={(e) => updateMax(Number(e.target.value))}
            className="w-full pl-5 pr-2 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
          />
        </div>
      </div>
    </div>
  );
}