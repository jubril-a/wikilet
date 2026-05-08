import IconButton from "../components/ui/IconButton"
import { CheckIcon } from "@heroicons/react/24/solid"
import NotificationsTimeline from "./NotificationTimeline"

export default function NotificationPage() {
    return (
        <div className="max-w-306 mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-primary-1 mb-1">Notifications</h1>
                    <p className="text-gray-500 text-sm">Stay updated with the latest activity across your properties.</p>
                </div>
                <IconButton label="Mark all as Read" url="properties/create" Icon={CheckIcon} />
            </div>
            <NotificationsTimeline />
        </div>
    )
}
