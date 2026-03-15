import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function ReviewCard({ review }) {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-amber-200 h-full flex flex-col"
      whileHover={{ y: -4 }}
    >
      {/* Stars */}
      <div className="flex items-center mb-4 gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-6 font-inter flex-grow italic">"{review.text}"</p>

      {/* Author */}
      <div className="flex items-center pt-4 border-t border-gray-100">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-amber-100"
        />
        <div>
          <h4 className="font-bold text-gray-900 font-playfair">{review.name}</h4>
          <p className="text-sm text-gray-500 font-inter">Verified Guest</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ReviewCard;
