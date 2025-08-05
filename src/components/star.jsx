// StarRating.jsx
import React, { useState } from 'react'

export function StarRating({ product }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0);


    return (
        <div className="flex flex-row space-x-1 items-center">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    onClick={() => {
                        setRating(star);
                        console.log(`Id: ${product?.id || 'Unknown Product'}, Product: ${product?.txt || 'Unknown Product'}, Rating: ${star}`)
                    }}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={(hover || rating) >= star ? '#facc15' : 'none'}
                    viewBox="0 0 24 24"
                    stroke="#facc15"
                    strokeWidth={2}
                    className="w-6 h-6 cursor-pointer transition duration-150 ease-in-out"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.071 6.373a1 1 0 00.95.69h6.708c.969 0 1.371 1.24.588 1.81l-5.426 3.944a1 1 0 00-.364 1.118l2.071 6.373c.3.921-.755 1.688-1.54 1.118l-5.426-3.944a1 1 0 00-1.176 0l-5.426 3.944c-.784.57-1.838-.197-1.539-1.118l2.07-6.373a1 1 0 00-.364-1.118l-5.426-3.944c-.783-.57-.38-1.81.588-1.81h6.708a1 1 0 00.951-.69l2.07-6.373z"
                    />
                </svg>
            ))}
            <span className="ml-2 text-sm text-gray-700">{rating} / 5</span>
        </div>
    )
}