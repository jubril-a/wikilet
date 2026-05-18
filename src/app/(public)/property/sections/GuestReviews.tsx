"use client";

import { useState } from "react";

interface Review {
  id: number;
  name: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
  verified: boolean;
  date: string;
  rating: number;
  body: string;
}

interface RatingBar {
  label: string;
  pct: number;
}

const RATING_BARS: RatingBar[] = [
  { label: "5 stars", pct: 82 },
  { label: "4 stars", pct: 12 },
  { label: "3 stars", pct: 4 },
];

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    initials: "SM",
    avatarBg: "bg-amber-100",
    avatarText: "text-amber-700",
    verified: true,
    date: "Oct 2024",
    rating: 5,
    body: "Absolutely stunning villa! The photos don't even do justice to the views from the terrace. The management was incredibly helpful throughout our stay. Cleanliness was top-notch and the amenities were better than expected. Will definitely be returning next summer.",
  },
  {
    id: 2,
    name: "David Rivera",
    initials: "DR",
    avatarBg: "bg-sky-100",
    avatarText: "text-sky-700",
    verified: true,
    date: "Oct 2024",
    rating: 4,
    body: "Great property overall. The room was spacious and well-equipped. Minor issue with the check-in time as we had to wait 15 minutes for the keys, but the staff was very apologetic. Would stay here again for sure.",
  },
  {
    id: 3,
    name: "Elena Thompson",
    initials: "ET",
    avatarBg: "bg-rose-100",
    avatarText: "text-rose-700",
    verified: true,
    date: "Sep 2024",
    rating: 5,
    body: "Beautifully decorated and very comfortable beds. We really appreciated the welcome basket! The WiFi was strong enough for remote work. One of the best experiences we've had on this platform.",
  },
];

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-amber-400" : i < rating ? "text-amber-300" : "text-stone-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function LargeStarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-7 h-7 ${i < Math.floor(rating) ? "text-amber-400" : i < rating ? "text-amber-300" : "text-stone-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function VerifiedIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3 min-w-0">
          <div
            className={`w-11 h-11 rounded-full ${review.avatarBg} ${review.avatarText} flex items-center justify-center text-sm font-semibold shrink-0`}
          >
            {review.initials}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-stone-800 text-[15px] leading-tight truncate">
              {review.name}
            </p>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              {review.verified && (
                <span className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                  <VerifiedIcon />
                  Verified Stay
                </span>
              )}
              <span className="text-stone-400 text-xs">{review.date}</span>
            </div>
          </div>
        </div>
        <div className="shrink-0">
          <StarRating rating={review.rating} />
        </div>
      </div>
      <p className="text-stone-500 text-[15px] leading-relaxed italic">
        &ldquo;{review.body}&rdquo;
      </p>
    </div>
  );
}

function RatingSummary() {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6 sm:p-8">
      <div className="mb-6 pb-6 border-b border-stone-100">
        <p className="text-7xl font-bold text-stone-900 leading-none mb-3">4.8</p>
        <LargeStarRating rating={4.8} />
        <p className="text-amber-500 font-semibold text-sm mt-2">Highly Recommended</p>
        <p className="text-stone-400 text-xs mt-1">Based on 124 reviews</p>
      </div>
      <div className="space-y-3">
        {RATING_BARS.map(({ label, pct }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="text-stone-500 text-sm w-14 shrink-0">{label}</span>
            <div className="flex-1 h-2.5 bg-stone-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full" style={{ width: `${pct}%` }} />
            </div>
          </div>
        ))}
        <p className="text-stone-400 text-xs pt-2">
          Most guests mention the stunning views and friendly host.
        </p>
      </div>
    </div>
  );
}

export default function GuestReviews() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? REVIEWS : REVIEWS.slice(0, 3);

  return (
    <section className="bg-[#fafaf8] py-20 px-4 border-t border-t-gray-200 mt-7">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-3">
            What our guests say
          </h2>
          <p className="text-stone-600 text-base max-w-md mx-auto leading-relaxed">
            Authentic stories from families and travelers who made Azure Horizon
            Villa their home away from home.
          </p>
        </div>

        {/* Two-column layout on md+, stacked on mobile */}
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Left: rating summary */}
          <div className="w-full md:w-80 shrink-0">
            <RatingSummary />
          </div>

          {/* Right: reviews + CTA */}
          <div className="flex-1 min-w-0">
            <div className="space-y-4">
              {displayed.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll((p) => !p)}
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-700 active:scale-95 text-white font-medium text-sm px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
              >
                {showAll ? "Show fewer reviews" : "See all 124 reviews"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}