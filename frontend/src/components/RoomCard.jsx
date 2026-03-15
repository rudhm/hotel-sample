import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, Wifi, Wind, Droplet, Home } from 'lucide-react';
import AmenityBadge from './AmenityBadge';

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
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer text-left w-full transition-all duration-300 border border-gray-100 hover:border-amber-200"
    >
      {/* Image Container */}
      <motion.div
        className="relative h-56 overflow-hidden bg-gray-200"
        whileHover={{ scale: 1.12 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Rating Badge */}
        <motion.div
          className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md flex items-center gap-1"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2 }}
        >
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-bold text-gray-900">{room.rating}</span>
        </motion.div>
        
        {/* Price Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.3 }}
        >
          ₹{room.price}/night
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.15 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-1 font-playfair">
            {room.name}
          </h3>
          <p className="text-gray-600 text-sm">{room.description}</p>
        </motion.div>

        {/* Rating & Reviews */}
        <motion.div
          className="flex items-center justify-between py-2 border-y border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12 + 0.2 }}
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({room.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700">
            <Users size={16} />
            <span className="text-sm font-medium">{room.capacity} guests</span>
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

        {/* View & Book Button */}
        <motion.button
          onClick={() => navigate(`/rooms/${room.id}`)}
          className="w-full bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white py-3 rounded-lg font-semibold transition text-center font-inter font-medium"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          View & Book
        </motion.button>
      </div>
    </motion.button>
  );
}

export default RoomCard;
