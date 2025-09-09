// StarIcon.jsx
import React from 'react';

export default function StarIcon({ className, fill, ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            viewBox="0 0 20 20"
            stroke="#facc15"
            strokeWidth={2}
            className={className} // Используем переданный className
            {...props} // Передаем остальные props (onClick, onMouseEnter и т.д.)
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
        </svg>
    );
}