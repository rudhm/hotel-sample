import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Train, Utensils } from 'lucide-react';
import { nearbyAttractions as attractionsData, contactInfo, calculateDistance } from '../config/contact';

function NearbyAttractions() {
  const attractions = attractionsData.map(attr => {
    const distance = calculateDistance(
      contactInfo.coordinates.lat,
      contactInfo.coordinates.lng,
      attr.coordinates.lat,
      attr.coordinates.lng
    );
    return {
      ...attr,
      distance: `${distance} km away`,
      color: attr.id === 'temple' ? 'bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30' : 
             attr.id === 'station' ? 'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30' : 
             'bg-yellow-50 dark:bg-yellow-900/20 hover:bg-yellow-100 dark:hover:bg-yellow-900/30',
      iconColor: attr.id === 'temple' ? 'text-red-600 dark:text-red-400' : 
                 attr.id === 'station' ? 'text-blue-600 dark:text-blue-400' : 
                 'text-yellow-600 dark:text-yellow-400'
    };
  });
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      id="attractions"
      className="py-20 bg-gradient-to-b from-white dark:from-gray-950 to-gray-50 dark:to-gray-900 transition-colors duration-200"
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-playfair">
            Nearby Attractions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-inter">
            Explore the best places to visit near Gulab Lodge
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-700 to-amber-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Attractions Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.id}
              variants={itemVariants}
              className={`${attraction.color} rounded-xl shadow-lg dark:shadow-gray-900/50 p-8 transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-600 cursor-pointer group`}
              whileHover={{ y: -8, shadow: '0 25px 50px rgba(0, 0, 0, 0.15)' }}
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {attraction.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-playfair">
                {attraction.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 font-inter leading-relaxed">
                {attraction.description}
              </p>

              {/* Distance Tag */}
              <motion.div
                className="inline-block bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 group-hover:border-amber-300 dark:group-hover:border-amber-600"
                whileHover={{ scale: 1.05 }}
              >
                📍 {attraction.distance}
              </motion.div>

              {/* Hover Arrow */}
              <motion.div
                className="mt-4 flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold"
                initial={{ x: 0 }}
                whileHover={{ x: 6 }}
              >
                <span>Explore</span>
                <span className="text-lg">→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default NearbyAttractions;
