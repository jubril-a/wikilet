import CenterWrapper from "@/src/components/layout/CenterWrapper"
import OrderBox from "../../../features/booking/components/OrderBox"

export default function page() {
    return (
        <CenterWrapper heading="Booking Details">
            <OrderBox />
        </CenterWrapper>
    )
}