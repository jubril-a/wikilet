import { create } from "zustand";
import { FilterKey } from "../app/types";

type FilterStore = {
  selectedFilters: Record<FilterKey, string[]>;
  toggleFilter: (category: FilterKey, value: string) => void;
  clearFilters: () => void;
};

const defaultFilters = (): Record<FilterKey, string[]> => ({
  "Property rating": [],
  "Property type": [],
  "Guest Preferences": [],
  "Facilities": [],
});

export const useFilterStore = create<FilterStore>((set) => ({
  selectedFilters: defaultFilters(),

  toggleFilter: (category, value) =>
    set((state) => {
      const current = [...state.selectedFilters[category]];
      console.log("category:", category);
      console.log("value:", value);
      console.log("current:", current);
      
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      console.log("updated:", updated);

      return {
        selectedFilters: {
          ...state.selectedFilters,
          [category]: updated,
        },
      };
    }),

  clearFilters: () => set({ selectedFilters: defaultFilters() }), 
}));