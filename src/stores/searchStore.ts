import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type SearchState = {
  destination: string;
  checkInDate: Date | undefined;
  checkOutDate: Date | undefined;
  adults: number;
  children: number;
  rooms: number;
  pets: boolean;

  // actions
  setDestination: (value: string) => void;
  setCheckInDate: (value: Date) => void;
  setCheckOutDate: (value: Date) => void;
  setAdults: (value: number) => void;
  setChildren: (value: number) => void;
  setRooms: (value: number) => void;
  setPets: (value: boolean) => void;
  reset: () => void;
};

const customStorage = createJSONStorage(() => sessionStorage, {
  reviver: (key, value) => {
    if ((key === "checkInDate" || key === "checkOutDate") && value) {
      return new Date(value as string);
    }
    return value;
  },
  replacer: (key, value) => {
    if ((key === "checkInDate" || key === "checkOutDate") && value instanceof Date) {
      return value.toISOString();
    }
    return value;
  },
});

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      destination: "Select Destination",
      checkInDate: undefined,
      checkOutDate: undefined,
      adults: 0,
      children: 0,
      rooms: 0,
      pets: false,

      // actions
      setDestination: (value) => set({ destination: value }),
      setCheckInDate: (value) => set({ checkInDate: value }),
      setCheckOutDate: (value) => set({ checkOutDate: value }),
      setAdults: (value) => set({ adults: value }),
      setChildren: (value) => set({ children: value }),
      setRooms: (value) => set({ rooms: value }),
      setPets: (value) => set({ pets: value }),
      reset: () =>
        set({
          destination: "",
          checkInDate: undefined,
          checkOutDate: undefined,
          adults: 1,
          children: 0,
          rooms: 1,
          pets: false,
        }),
    }),
    {
      name: "search-store",
      storage: customStorage,
    }
  )
);