import React, { useMemo } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

function RatingStats({ reviews }) {
  const stats = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return {
        averageRating: 0,
        totalReviews: 0,
        distribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      };
    }

    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    let totalRating = 0;

    reviews.forEach(review => {
      totalRating += review.rating;
      distribution[review.rating]++;
    });

    return {
      averageRating: totalRating / reviews.length,
      totalReviews: reviews.length,
      distribution,
    };
  }, [reviews]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-8 mb-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Overall Rating */}
        <motion.div variants={itemVariants} className="text-center">
          <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
            {stats.averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center gap-1 mb-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={24}
                className={i < Math.floor(stats.averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            {stats.totalReviews} {stats.totalReviews === 1 ? 'Review' : 'Reviews'}
          </p>
        </motion.div>

        {/* Rating Breakdown */}
        <motion.div variants={itemVariants} className="md:col-span-2 space-y-3">
          {[5, 4, 3, 2, 1].map(stars => {
            const count = stats.distribution[stars];
            const percentage = stats.totalReviews > 0 ? (count / stats.totalReviews) * 100 : 0;

            return (
              <div key={stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12">
                  {Array.from({ length: stars }, (_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 w-12 text-right">
                  {count}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RatingStats;
