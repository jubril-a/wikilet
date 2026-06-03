import { cookies } from "next/headers"
import EditPropertyClient from "./EditPropertyClient"
import type { PropertyData } from "@/src/types/property"

async function fetchProperty(id: string, token: string): Promise<PropertyData> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_EXPRESS_API_URL}/agents/properties/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        cache: "no-store",
    })
    if (!res.ok) throw new Error("Failed to fetch property")
    const json = await res.json()
    return json.data.property
}

export default async function EditProperty({ params }: { params: { id: string } }) {
    const cookieStore = await cookies()
    const token = cookieStore.get("accessToken")?.value
    const a = await params
    const id = a.id


    if (!token) throw new Error("Unauthorized")

    const property = await fetchProperty(id, token)

    return <EditPropertyClient property={property} propertyId={id} />
}