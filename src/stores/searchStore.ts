import { create } from "zustand";

type SearchState = {

    destination: string,
    checkInDate: string,
    checkOutDate: string,
    adults: number,
    children: number,
    rooms: number,
    pets: boolean

    // actions
    setDestination: (value: string) => void;
    setCheckInDate: (value: string) => void;
    setCheckOutDate: (value: string) => void;
    setGuests: (adults: number, children: number) => void;
    setRooms: (value: number) => void;
    setPets: (value: boolean) => void;
    reset: () => void;
};

export const useSearchStore = create<SearchState>((set) => ({

    destination: "Select Destination",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
    rooms: 1,
    pets: false,

    // actions
    setDestination: (value) => set({ destination: value }),
    setCheckInDate: (value) => set({ checkInDate: value }),
    setCheckOutDate: (value) => set({ checkOutDate: value }),
    setGuests: (adults, children) => set({ adults, children }),
    setRooms: (value) => set({ rooms: value }),
    setPets: (value) => set({ pets: value }),
    reset: () =>
    set({
        destination: "",
        checkInDate: "",
        checkOutDate: "",
        adults: 1,
        children: 0,
        rooms: 1,
        pets: false,
    }),
}));