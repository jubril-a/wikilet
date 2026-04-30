interface PropertyType {
    title: string,
    category: "home" | "hotel" | "apartment" | "vacation",
    spaceType: "entire" | "private" | "shared",
    maxCapacity: number,
    location: {
        state: string,
        area: string,
        address: string,
        landmark: string,
    },
    images: File[], // array of four images
    amenities: string[],
    power: "24hr" | "gen" | "grid" | "inverter",
    nightlyRate: number,
    cleaningFee?: number,
    minStay: number,
    maxStay: number,
    allow: string[]
}