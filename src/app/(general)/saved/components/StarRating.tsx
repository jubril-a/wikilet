import { Star } from "lucide-react"

export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < Math.round(rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}
        />
      ))}
    </div>
  )
}