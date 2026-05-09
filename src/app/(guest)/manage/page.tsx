import CenterWrapper from "@/src/components/layout/CenterWrapper"
import ManageAccount from "./ManageAccount"
import { getMe } from "@/src/lib/auth"

export default async function ManagePage() {
    const user = await getMe()

    return (
        <>
            <CenterWrapper heading="Edit Details">
                <ManageAccount
                    initialData={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        avatar: user.avatar,
                    }}
                    />
            </CenterWrapper>
        </>
    )
}