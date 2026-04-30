import ManageAccount from "./ManageAccount"
import { getMe } from "@/src/lib/auth"

export default async function ManageWrapper() {

    const user = await getMe()

    return (
        
        <ManageAccount
        initialData={{
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
        }}
        />
           
    )
}