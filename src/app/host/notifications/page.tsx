import NotificationsTimeline from "./NotificationTimeline"

export default function NotificationPage() {
    return (
        <div className="max-w-306 mx-auto">
            <div className="mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-primary-1 mb-1">Notifications</h1>
                    <p className="text-gray-500 text-sm">Stay updated with the latest activity across your properties.</p>
                </div>
            </div>
            <NotificationsTimeline />
        </div>
    )
}
