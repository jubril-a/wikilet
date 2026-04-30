import SavedProperties from "./SavedProperties"
import SubHero from "@/src/components/SubHero"

export default function page() {
    return (
        <>
            <SubHero heading="Saved Properties" />
            <SavedProperties />
            <div className="pb-50"></div>
        </>
    )
}