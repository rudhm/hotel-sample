import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import RatingBadge from './RatingBadge';

function ReviewCard({ review }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-600 h-full flex flex-col"
      whileHover={{ y: -4 }}
    >
      {/* Stars */}
      <div className="mb-4">
        <RatingBadge rating={review.rating} size="sm" showText={true} />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 font-inter flex-grow italic">"{review.text}"</p>

      {/* Author */}
      <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-100 dark:border-amber-700"
        />
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white font-playfair">{review.name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">Verified Guest</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
