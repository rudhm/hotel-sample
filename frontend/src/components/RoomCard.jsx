import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Wifi, Wind, Droplet, Home } from 'lucide-react';
import AmenityBadge from './AmenityBadge';
import RatingBadge from './RatingBadge';
import OptimizedImage from './OptimizedImage';
import WhatsAppButton from './WhatsAppButton';

function RoomCard({ room, amenities, index }) {
  const navigate = useNavigate();
  const roomAmenities = amenities.filter((a) => room.amenities.includes(a.id));

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.12,
        ease: 'easeOut',
      },
    },
  };

  const iconMap = {
    'wifi': Wifi,
    'wind': Wind,
    'droplet': Droplet,
    'home': Home,
  };

  return (
    <motion.button
      onClick={() => navigate(`/rooms/${room.id}`)}
      variants={{
        ...cardVariants,
        hover: {
          y: -16,
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
        },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer text-left w-full transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-amber-200 flex flex-col h-full"
    >
      {/* Image Container - Larger on mobile */}
      <motion.div
        className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 dark:bg-gray-700 rounded-t-xl flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <OptimizedImage
          src={room.image}
          alt={room.name}
          className="w-full h-full"
          lazy={index > 2}
        />
        {/* Rating Badge - Larger touch target */}
        <motion.div
          className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white dark:bg-gray-800/95 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-md flex items-center gap-1 min-h-[40px] sm:min-h-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2 }}
        >
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold text-gray-900 dark:text-white">{room.rating}</span>
        </motion.div>

        {/* Price Badge - Larger and clearer */}
        <motion.div
          className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-full text-xs sm:text-sm font-bold shadow-lg min-h-[40px] sm:min-h-auto flex items-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3 }}
        >
          ₹{room.price}/night
        </motion.div>
      </motion.div>

      {/* Content - Better spacing on mobile */}
      <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex flex-col flex-grow">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.15 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 font-playfair leading-snug">
            {room.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{room.description}</p>
        </motion.div>

        {/* Rating & Reviews */}
        <motion.div
          className="py-3 space-y-3 border-y border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2 }}
        >
          <div className="flex items-center justify-between">
            <RatingBadge rating={room.rating} reviewCount={room.reviews} size="sm" />
            <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
              <Users size={16} />
              <span className="text-sm font-medium">{room.capacity} guests</span>
            </div>
          </div>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          className="grid grid-cols-4 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.25 }}
        >
          {roomAmenities.slice(0, 4).map((amenity) => {
            const IconComponent = iconMap[amenity.icon] || Home;
            return (
              <div key={amenity.id} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-amber-50 hover:bg-amber-100 transition">
                <IconComponent size={18} className="text-amber-700" />
                <span className="text-xs text-center text-gray-700 font-medium line-clamp-1">{amenity.name.split(' ')[0]}</span>
              </div>
            );
          })}
        </motion.div>

        {/* View & Book Button - Large touch targets */}
        <motion.div
          className="flex gap-2 mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.button
            onClick={() => navigate(`/rooms/${room.id}`)}
            className="flex-1 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white py-3 rounded-lg font-semibold transition text-center font-inter font-medium text-sm sm:text-base min-h-[48px] flex items-center justify-center"
          >
            View Details
          </motion.button>
          <WhatsAppButton roomName={room.name} className="flex-1 min-h-[48px]" />
        </motion.div>
      </div>
    </motion.button>
  );
}

export default RoomCard;
