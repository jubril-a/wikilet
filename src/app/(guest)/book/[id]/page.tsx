import CenterWrapper from "@/src/components/layout/CenterWrapper"
import OrderBox from "@/src/features/booking/components/OrderBox"
import { getProperty } from "@/src/features/property/actions";

export default async function page({ params }: { params: { id: string }}) {
    const id = (await params).id
    const { data } = await getProperty(id);
    const property = data.property


    return (
        <CenterWrapper heading="Booking Details">
            <OrderBox title={property.title} city={property.city} country={property.country} imageUrl={property.images[0]} price={property.price} />
        </CenterWrapper>
    )
}