import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import RoomCard from '../components/RoomCard';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';

function RoomsPage() {
  const navigate = useNavigate();
  const [rooms] = useState(roomsData);
  const [amenities] = useState(amenitiesData);
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Filter rooms based on price and amenities
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const priceMatch = room.price >= priceFilter[0] && room.price <= priceFilter[1];
      const amenityMatch =
        selectedAmenities.length === 0 ||
        selectedAmenities.some((amenity) => room.amenities.includes(amenity));
      return priceMatch && amenityMatch;
    });
  }, [rooms, priceFilter, selectedAmenities]);

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
      <Navbar />

      <motion.div
        className="pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Our Rooms</h1>
            <p className="text-blue-100">Discover the perfect room for your stay</p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <motion.aside
              className="lg:col-span-1"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Filters</h3>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceFilter[0]}
                      onChange={(e) =>
                        setPriceFilter([parseInt(e.target.value), priceFilter[1]])
                      }
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceFilter[1]}
                      onChange={(e) =>
                        setPriceFilter([priceFilter[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                    <motion.p
                      className="text-sm text-gray-600"
                      key={`${priceFilter[0]}-${priceFilter[1]}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      ${priceFilter[0]} - ${priceFilter[1]}
                    </motion.p>
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4">Amenities</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {amenities.slice(0, 8).map((amenity, index) => (
                      <motion.label
                        key={amenity.id}
                        className="flex items-center cursor-pointer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity.id)}
                          onChange={() => toggleAmenity(amenity.id)}
                          className="rounded border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">{amenity.name}</span>
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
              <div className="mb-6">
                <motion.p
                  className="text-gray-600"
                  key={filteredRooms.length}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Showing {filteredRooms.length} of {rooms.length} rooms
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
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <p className="text-gray-600 text-lg">No rooms match your filters.</p>
                  <motion.button
                    onClick={() => {
                      setPriceFilter([0, 500]);
                      setSelectedAmenities([]);
                    }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
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

      <Footer />
    </div>
  );
}

export default RoomsPage;
