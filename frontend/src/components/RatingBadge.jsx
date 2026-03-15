import React from 'react';
import { Star } from 'lucide-react';

function RatingBadge({ rating, reviewCount, size = 'md', showText = true }) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-2 text-sm',
    lg: 'px-4 py-3 text-base',
  };

  const starSize = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  // Render stars
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={starSize[size]}
      className={i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
    />
  ));

  return (
    <div className={`inline-flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700 rounded-full ${sizeClasses[size]}`}>
      <div className="flex gap-0.5">
        {stars}
      </div>
      {showText && (
        <span className="font-semibold text-gray-900 dark:text-yellow-300">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount && (
        <span className="text-gray-600 dark:text-gray-400">
          ({reviewCount})
        </span>
      )}
    </div>
  );
}

export default RatingBadge;
