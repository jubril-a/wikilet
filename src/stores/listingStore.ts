import { create } from "zustand";

type PropertyType = "home" | "hotel" | "apartment" | "vacation";
type Currency = "naira" | "dollar";
type SpaceType = "entire" | "private" | "shared";
type Power = "24hr" | "gen" | "grid" | "inverter";
type Allow = "smoking" | "ac" | "pets";

interface Location {
  area: string;
  address: string;
  landmark: string;
}

interface ListingState {
  title: string;
  description: string;
  propertyType: PropertyType | null;
  price: number;
  currency: Currency;
  city: string;
  country: string;
  location: Location;
  images: string[];
  amenities: string[];
  maxCapacity: number;
  spaceType: SpaceType | null;
  power: Power | null;
  cleaningFee?: number;
  minStay: number;
  maxStay: number;
  allow: Allow[];
}

interface ListingActions {
  setField: <K extends keyof ListingState>(key: K, value: ListingState[K]) => void;
  setLocation: (location: Partial<Location>) => void;
  addImage: (url: string) => void;
  removeImage: (url: string) => void;
  toggleAmenity: (amenity: string) => void;
  toggleAllow: (rule: Allow) => void;
  reset: () => void;
}

const initialState: ListingState = {
  title: "",
  description: "",
  propertyType: null,
  price: 0,
  currency: "naira",
  city: "",
  country: "",
  location: {
    area: "",
    address: "",
    landmark: "",
  },
  images: [],
  amenities: [],
  maxCapacity: 1,
  spaceType: null,
  power: null,
  cleaningFee: undefined,
  minStay: 1,
  maxStay: 30,
  allow: [],
};

export const useListingStore = create<ListingState & ListingActions>((set) => ({
  ...initialState,

  // Generic setter for simple fields
  setField: (key, value) => set({ [key]: value } as Pick<ListingState, typeof key>),

  // Merge partial location updates
  setLocation: (partial) =>
    set((state) => ({
      location: { ...state.location, ...partial },
    })),

  addImage: (url) =>
    set((state) => ({
      images: state.images.includes(url) ? state.images : [...state.images, url],
    })),

  removeImage: (url) =>
    set((state) => ({
      images: state.images.filter((img) => img !== url),
    })),

  toggleAmenity: (amenity) =>
    set((state) => ({
      amenities: state.amenities.includes(amenity)
        ? state.amenities.filter((a) => a !== amenity)
        : [...state.amenities, amenity],
    })),

  toggleAllow: (rule) =>
    set((state) => ({
      allow: state.allow.includes(rule)
        ? state.allow.filter((a) => a !== rule)
        : [...state.allow, rule],
    })),

  reset: () => set(initialState),
}));