import { MapPin } from "lucide-react"
import Image from "next/image"
import StarRating from "./StarRating"

interface Property {
  id: number
  type: string
  name: string
  location: string
  price: string
  rating: number
  reviews: number
  image: string
}

export default function PropertyCard({ property, onRemove }: { property: Property; onRemove: (id: number) => void }) {
  return (
    <div className="group min-[380px]:flex border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors">
      {/* Image */}
      <div className="w-40 min-h-40 max-[380px]:w-full max-[380px]:max-h-60 overflow-hidden shrink-0">
        {property.image ? (
          <Image width={144} height={120} src={property.image} alt={property.name} className="w-full h-full object-cover object-center" />
        ) : (
          <Image width={144} height={120} src="/images/product.jpg" alt={property.name} className="w-full h-full object-cover object-center" />
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-col justify-between px-4 py-3.5 flex-1 min-w-0">
        <div>
          <p className="text-xs text-gray-400 tracking-wide mb-1">{property.type}</p>
          <p className="font-bold text-primary-1 group-hover:text-blue-600 text-base truncate">{property.name}</p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin size={12} className="text-gray-400 shrink-0" />
            <span className="text-sm text-gray-700 truncate">{property.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <StarRating rating={property.rating} />
          <span className="text-xs text-gray-500">
            {property.rating.toFixed(1)} ({property.reviews})
          </span>
        </div>
        <div className="min-[480px]:hidden mt-4">
            <p><span className="text-gray-800 font-extrabold text-lg">{property.price}</span><span className="text-xs text-gray-400">/per night</span></p>
            <button
                onClick={() => onRemove(property.id)}
                className="text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors mt-2"
                >
                Remove
            </button>
          </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end justify-between px-4 py-3.5 border-l border-gray-100 min-w-25 max-[480px]:hidden">
        <div className="text-right">
          <p className="text-gray-800 font-extrabold text-lg">{property.price}</p>
          <p className="text-xs text-gray-400">per night</p>
        </div>
        <button
          onClick={() => onRemove(property.id)}
          className="text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  )
}