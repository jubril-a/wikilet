'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function StarRating({ name }: { name: string }) {
    const [rating, setRating] = useState(0)
    const [hovered, setHovered] = useState(0)

    return (
        <div className="flex items-center gap-1 my-5">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                >
                    {(hovered || rating) >= star
                        ? <StarIcon className="size-8 text-yellow-400 cursor-pointer" />
                        : <StarOutlineIcon className="size-8 text-yellow-400 cursor-pointer" />
                    }
                </button>
            ))}
            <input type="hidden" name={name} value={rating} />
        </div>
    )
}