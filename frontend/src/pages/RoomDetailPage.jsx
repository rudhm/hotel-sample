import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Wifi, Coffee, Wind, MapPin, Home, ArrowLeft } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import MobileBottomBookingButton from '../components/MobileBottomBookingButton';
import BookingForm from '../components/BookingForm';
import Modal from '../components/Modal';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';

function RoomDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const room = roomsData.find((r) => r.id === parseInt(id));

  if (!room) {
    return (
      <motion.div
        className="pt-24 min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Room Not Found</h1>
          <button
            onClick={() => navigate('/rooms')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Rooms
          </button>
        </div>
      </motion.div>
    );
  }

  const getAmenityIcon = (amenityId) => {
    const amenity = amenitiesData.find((a) => a.id === amenityId);
    return amenity ? amenity.icon : '🔧';
  };

  const getAmenityName = (amenityId) => {
    const amenity = amenitiesData.find((a) => a.id === amenityId);
    return amenity ? amenity.name : 'Unknown';
  };

  const handleBooking = (formData) => {
    setBookingData(formData);
    setShowConfirmation(true);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="pt-16 sm:pt-20 min-h-screen pb-32 lg:pb-0 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back Button */}
      <motion.div
        className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={() => navigate('/rooms')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition font-semibold text-sm sm:text-base"
        >
          <ArrowLeft size={18} />
          Back to Rooms
        </button>
      </motion.div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {/* Left Column - Gallery and Details */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            {/* Gallery with Lazy Loading */}
            <ImageGallery images={room.gallery} roomName={room.name} />

            {/* Room Info */}
            <motion.div
              variants={itemVariants}
              className="mt-6 sm:mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6"
            >
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">{room.name}</h1>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">({room.reviews} reviews)</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">{room.description}</p>

              {/* Specs */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
              >
                <div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Capacity</span>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{room.capacity} Guests</p>
                </div>
                <div>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Room Type</span>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">{room.name.split(' ')[0]}</p>
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div variants={itemVariants}>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4">Amenities</h3>
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {room.amenities.map((amenityId) => (
                    <motion.div
                      key={amenityId}
                      variants={itemVariants}
                      className="flex items-center gap-2 p-2 sm:p-3 bg-blue-50 dark:bg-gray-700 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition"
                    >
                      <span className="text-lg sm:text-2xl flex-shrink-0">{getAmenityIcon(amenityId)}</span>
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-200">{getAmenityName(amenityId)}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Booking Form (sticky on desktop) */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="sticky top-24">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4 sm:mb-6">
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Price per night</span>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">₹{room.price}</p>
                </div>
              </motion.div>

              <BookingForm roomPrice={room.price} onSubmit={handleBooking} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          navigate('/');
        }}
        title="Booking Confirmed!"
        type="success"
        confirmText="Continue"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <p className="text-gray-700">
            Thank you for your booking! A confirmation email will be sent to <strong>{bookingData?.email}</strong>.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Room</span>
              <span className="font-semibold text-gray-800">{room.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Guest Name</span>
              <span className="font-semibold text-gray-800">{bookingData?.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-in</span>
              <span className="font-semibold text-gray-800">
                {bookingData?.checkIn && new Date(bookingData.checkIn).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Check-out</span>
              <span className="font-semibold text-gray-800">
                {bookingData?.checkOut && new Date(bookingData.checkOut).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Guests</span>
              <span className="font-semibold text-gray-800">{bookingData?.guests}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            We look forward to welcoming you at Luxe Hotel. If you have any questions, please contact us.
          </p>
        </motion.div>
      </Modal>
      
      <MobileBottomBookingButton />
    </motion.div>
  );
}

export default RoomDetailPage;
