import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import AmenityBadge from './AmenityBadge';

function RoomCard({ room, amenities, index }) {
  const navigate = useNavigate();
  const roomAmenities = amenities.filter((a) => room.amenities.includes(a.id));

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.button
      onClick={() => navigate(`/rooms/${room.id}`)}
      variants={{
        ...cardVariants,
        hover: {
          y: -8,
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer text-left w-full hover:shadow-xl transition"
    >
      {/* Image */}
      <motion.div
        className="relative h-48 overflow-hidden bg-gray-200"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          ${room.price}/night
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="p-4">
        <motion.h3
          className="text-xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {room.name}
        </motion.h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {room.rating} ({room.reviews} reviews)
          </span>
        </div>

        {/* Capacity */}
        <div className="flex items-center mb-4 text-gray-700">
          <Users size={18} className="mr-2" />
          <span className="text-sm">Up to {room.capacity} guests</span>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {roomAmenities.slice(0, 4).map((amenity) => (
              <AmenityBadge key={amenity.id} amenity={amenity} />
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{room.amenities.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Book Button */}
        <motion.div
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition text-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View & Book
        </motion.div>
      </div>
    </motion.button>
  );
}

export default RoomCard;
