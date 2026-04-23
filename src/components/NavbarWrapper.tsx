import Navbar from "./Navbar"
import { getMe } from "../lib/auth"

export default async function NavbarWrapper() {
    const user = await getMe()

    return <Navbar user={user} />
}