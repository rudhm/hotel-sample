import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import RoomCard from '../components/RoomCard';
import MobileBottomBookingButton from '../components/MobileBottomBookingButton';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';

function RoomsPage() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [rooms] = useState(roomsData);
  const [amenities] = useState(amenitiesData);
  const [priceRange, setPriceRange] = useState(500);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Filter rooms based on price and amenities
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const priceMatch = room.price <= priceRange;
      const amenityMatch =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) => room.amenities.includes(amenity));
      return priceMatch && amenityMatch;
    });
  }, [rooms, priceRange, selectedAmenities]);

  const toggleAmenity = (amenityId) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId) ? prev.filter((a) => a !== amenityId) : [...prev, amenityId],
    );
  };

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        className="pt-16 sm:pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 sm:py-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 dark:text-white leading-tight">{t('rooms.title')}</h1>
            <p className="text-blue-100 dark:text-blue-200 text-sm sm:text-base">Find the perfect room for your stay in Maihar</p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 pb-32 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Sidebar - Filters (Stack on mobile) */}
            <motion.aside
              className="lg:col-span-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md sticky top-20">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Filters</h3>

                {/* Price Filter */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">Max Price: ₹{priceRange}</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="500"
                      max="2000"
                      step="50"
                      value={priceRange}
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>₹500</span>
                      <span>₹2000</span>
                    </div>
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-4">Amenities</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                    {amenities.map((amenity, index) => (
                      <motion.label
                        key={amenity.id}
                        className="flex items-center cursor-pointer group"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity.id)}
                          onChange={() => toggleAmenity(amenity.id)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition">{amenity.name}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Main Content - Room Grid */}
            <motion.main
              className="lg:col-span-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="mb-6 flex justify-between items-center">
                <motion.p
                  className="text-gray-600 dark:text-gray-400"
                  key={filteredRooms.length}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Showing {filteredRooms.length} rooms
                </motion.p>
              </div>

              {filteredRooms.length > 0 ? (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  key={filteredRooms.map((r) => r.id).join(',')}
                >
                  {filteredRooms.map((room, index) => (
                    <RoomCard
                      key={room.id}
                      room={room}
                      amenities={amenities}
                      index={index}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  className="text-center py-20 bg-white dark:bg-gray-800 rounded-lg shadow-inner"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">No rooms match your filters.</p>
                  <motion.button
                    onClick={() => {
                      setPriceRange(2000);
                      setSelectedAmenities([]);
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reset Filters
                  </motion.button>
                </motion.div>
              )}
            </motion.main>
          </div>
        </div>
      </motion.div>

      <MobileBottomBookingButton />
    </div>
  );
}

export default RoomsPage;
