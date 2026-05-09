"use client";

import { useState } from "react";
import {
  CalendarCheck,
  Star,
  CreditCard,
  AlertCircle,
  ChevronRight,
} from "lucide-react";

type NotificationCategory = "All" | "Unread" | "Bookings" | "Revenue" | "Reviews" | "System";

type NotificationType = "booking" | "review" | "revenue" | "system";

interface Notification {
  id: number;
  type: NotificationType;
  badge: string;
  badgeColor: string;
  timeAgo: string;
  title: string;
  body: string;
  unread?: boolean;
  day: "today" | "yesterday";
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "booking",
    badge: "BOOKING UPDATE",
    badgeColor: "bg-blue-100 text-blue-700",
    timeAgo: "2 hours ago",
    title: "New Booking: Azure Horizon Villa",
    body: "Johnathan Smith just booked #RM-402 and #RM-405 for 4 nights (Oct 24 – Oct 28).",
    unread: true,
    day: "today",
  },
  {
    id: 2,
    type: "review",
    badge: "GUEST REVIEW",
    badgeColor: "bg-amber-100 text-amber-700",
    timeAgo: "5 hours ago",
    title: "New 5-Star Review Received",
    body: '"The Skyline Penthouse exceeded all expectations. The views were breathtaking and the host was incredibly accommodating."',
    day: "today",
  },
  {
    id: 3,
    type: "revenue",
    badge: "REVENUE ALERT",
    badgeColor: "bg-emerald-100 text-emerald-700",
    timeAgo: "Yesterday, 4:15 PM",
    title: "Payment Successful: $1,420.00",
    body: "Payout for the week of Oct 10th has been processed and deposited into your account.",
    day: "yesterday",
  },
  {
    id: 4,
    type: "system",
    badge: "SYSTEM ALERT",
    badgeColor: "bg-red-100 text-red-700",
    timeAgo: "Yesterday, 10:00 AM",
    title: "Scheduled Maintenance",
    body: "The booking engine will be undergoing scheduled maintenance this Sunday from 2 AM to 4 AM UTC. Booking services may be temporarily unavailable.",
    day: "yesterday",
  },
];

const categoryFilters: NotificationCategory[] = [
  "All",
  "Unread",
  "Bookings",
  "Revenue",
  "Reviews",
  "System",
];

const iconMap: Record<NotificationType, React.ReactNode> = {
  booking: <CalendarCheck className="w-5 h-5 text-blue-600" />,
  review: <Star className="w-5 h-5 text-amber-500" />,
  revenue: <CreditCard className="w-5 h-5 text-emerald-600" />,
  system: <AlertCircle className="w-5 h-5 text-red-500" />,
};

const iconBgMap: Record<NotificationType, string> = {
  booking: "bg-blue-50",
  review: "bg-amber-50",
  revenue: "bg-emerald-50",
  system: "bg-red-50",
};

const categoryTypeMap: Partial<Record<NotificationCategory, NotificationType>> = {
  Bookings: "booking",
  Revenue: "revenue",
  Reviews: "review",
  System: "system",
};

export default function NotificationsTimeline() {
  const [active, setActive] = useState<NotificationCategory>("All");

  const filtered = notifications.filter((n) => {
    if (active === "All") return true;
    if (active === "Unread") return n.unread;
    return n.type === categoryTypeMap[active];
  });

  const todayItems = filtered.filter((n) => n.day === "today");
  const yesterdayItems = filtered.filter((n) => n.day === "yesterday");

  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categoryFilters.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                active === cat
                  ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Today Section */}
        {todayItems.length > 0 && (
          <section className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Today
            </p>
            <div className="flex flex-col gap-3">
              {todayItems.map((n) => (
                <NotificationCard key={n.id} notification={n} />
              ))}
            </div>
          </section>
        )}

        {/* Yesterday Section */}
        {yesterdayItems.length > 0 && (
          <section>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
              Yesterday
            </p>
            <div className="flex flex-col gap-3">
              {yesterdayItems.map((n) => (
                <NotificationCard key={n.id} notification={n} />
              ))}
            </div>
          </section>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400 text-sm">
            No notifications in this category.
          </div>
        )}
      </div>
    </div>
  );
}

function NotificationCard({ notification: n }: { notification: Notification }) {
  return (
    <div
      className={`relative bg-white rounded-2xl p-5 shadow-sm border transition-shadow duration-200 hover:shadow-md ${
        n.unread ? "border-blue-100" : "border-gray-100"
      }`}
    >
      {/* Unread dot */}
      {n.unread && (
        <span className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-blue-500" />
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
            iconBgMap[n.type]
          }`}
        >
          {iconMap[n.type]}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className={`text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full ${n.badgeColor}`}
            >
              {n.badge}
            </span>
            <span className="text-xs text-gray-400">{n.timeAgo}</span>
          </div>

          <h3 className="text-sm font-semibold text-gray-900 mb-1">
            {n.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">{n.body}</p>

          <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-gray-700 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-150">
            View Details
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}