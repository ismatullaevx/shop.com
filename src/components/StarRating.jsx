import React, { useState } from 'react';
import { HiStar, HiOutlineStar } from 'react-icons/hi';

export default function StarRating({ product }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5">
            {[1, 2, 3, 4, 5].map((star) => {
                const isActive = (hover || rating) >= star;
                const StarIcon = isActive ? HiStar : HiOutlineStar;
                return (
                    <StarIcon
                        key={star}
                        onClick={() => {
                            setRating(star);
                            console.log(`Id: ${product?.id || 'Unknown'}, Product: ${product?.txt || 'Unknown'}, Rating: ${star}`);
                        }}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className="
                            text-yellow-400
                            cursor-pointer
                            transition duration-150 ease-in-out
                            w-4 h-4        /* Mobile */
                            sm:w-5 sm:h-5  /* Small screens */
                            md:w-6 md:h-6  /* Medium screens */
                            lg:w-7 lg:h-7  /* Large screens */
                            xl:w-8 xl:h-8  /* Extra large screens */
                        "
                    />
                );
            })}
        </div>
    );
}
