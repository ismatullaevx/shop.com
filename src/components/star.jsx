import React, { useState } from 'react'

export function StarRating() {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    return (
        <div className="flex flex-row items-center space-x-1 sm:space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={(hover || rating) >= star ? '#facc15' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="#facc15"
                    strokeWidth={2}
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer transition duration-150 ease-in-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.071 6.373a1 1 0 00.95.69h6.708c.969 0 1.371 1.24.588 1.81l-5.426 3.944a1 1 0 00-.364 1.118l2.071 6.373c.3.921-.755 1.688-1.54 1.118l-5.426-3.944a1 1 0 00-1.176 0l-5.426 3.944c-.784.57-1.838-.197-1.539-1.118l2.07-6.373a1 1 0 00-.364-1.118l-5.426-3.944c-.783-.57-.38-1.81.588-1.81h6.708a1 1 0 00.951-.69l2.07-6.373z"
                    />
                </svg>
            ))}
        </div>
    )
}
