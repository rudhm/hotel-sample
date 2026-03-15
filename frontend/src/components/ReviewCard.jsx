import React from 'react';
import { Star } from 'lucide-react';

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
      {/* Header */}
      <div className="flex items-center mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-900">{review.name}</h4>
          {/* Rating */}
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm">{review.text}</p>
    </div>
  );
}

export default ReviewCard;
