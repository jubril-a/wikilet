import IconButton from "../components/ui/IconButton"
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"
import BookingsTable from "./BookingsTable"

export default function BookingsPage() {
    return (
        <div className="max-w-306 mx-auto">
            <div className="sm:flex sm:gap-4 sm:justify-between sm:items-center mb-8">
                <div className=" max-sm:mb-4">
                    <h1 className="text-2xl font-bold text-primary-1 mb-1">Bookings Management</h1>
                    <p className="text-gray-500 text-sm">Track, monitor, and manage all your property reservations in one place.</p>
                </div>
                <IconButton label="Export Report" url="properties/create" Icon={ArrowDownTrayIcon} />
            </div>

            <BookingsTable />            
        </div>
    )
}
