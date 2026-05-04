export type popupType = "location" | "schedule" | "guest" | "review" | "none"

export type FilterKey = "Property rating" | "Property type" | "Guest Preferences" | "Facilities";

export type propertyType = {
    title: string,
    description: string,
    propertyType: "home" | "hotel" | "apartment" | "vacation",
    price: number,
    currency: string,
    city: string,
    country: string,
    location: {
        area: string,
        address: string,
        landmark: string,
    },
    images: string[],
    amenities: string[],

    maxCapacity: number, 
    spaceType: "entire" | "private" | "shared",
    power: "24hr" | "gen" | "grid" | "inverter", 
    cleaningFee?: number,
    minStay: number,
    maxStay: number,
    allow: string[]
}

export type QueryType = {
    location?: string,
    checkin?: Date,
    checkout?: Date,
    guests?: number,
    price_min?: number,
    price_max?: number,
    rating?: number,
    propertyType?: "home" | "hotel" | "apartment" | "vacation",
    agentId?: string,
    amenities?: string[],
    allow?: string[]
}