import Topbar from "./Topbar"
import { getMe } from "@/src/lib/auth"

export default async function TopbarWrapper() {
    const user = await getMe()

    return <Topbar user={user} />
}