import SavedProperties from "./SavedProperties"
import ListingHero from "@/src/components/SubHero"

export default function page() {
    return (
        <>
            <ListingHero heading="Saved Properties" />
            <SavedProperties />
            <div className="pb-50"></div>
        </>
    )
}