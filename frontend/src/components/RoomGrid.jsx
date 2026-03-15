import React from 'react';
import { motion } from 'framer-motion';
import RoomCard from './RoomCard';

function RoomGrid({ rooms, amenities }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Rooms</h2>
        <p className="text-gray-600 mb-8">Discover our luxurious collection of rooms</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {rooms.map((room, index) => (
          <RoomCard key={room.id} room={room} amenities={amenities} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default RoomGrid;
