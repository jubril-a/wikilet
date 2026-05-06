import CenterWrapper from "@/src/components/CenterWrapper"
import OrderBox from "../components/OrderBox"

export default function page() {
    return (
        <CenterWrapper heading="Booking Details">
            <OrderBox />
            <div className="pb-50"></div>
        </CenterWrapper>
    )
}