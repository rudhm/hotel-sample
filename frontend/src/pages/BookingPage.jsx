import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import BookingForm from '../components/BookingForm';
import Modal from '../components/Modal';

import MobileBottomBookingButton from '../components/MobileBottomBookingButton';
function BookingPage() {
  const { t } = useLanguage();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState(null);

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
      className="pt-16 sm:pt-20 min-h-screen pb-32 lg:pb-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-3xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header - Mobile optimized */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-2 sm:mb-4 leading-tight">
              Reserve Your Stay
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300">
              Fill out the form below to book your room at Gulab Lodge
            </p>
          </motion.div>

          {/* Features - Stack on mobile */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            {[
              { icon: '✓', title: 'Best Price', desc: 'Lowest rates online' },
              { icon: '✓', title: 'Instant Confirmation', desc: 'Booking details immediately' },
              { icon: '✓', title: 'Free Cancellation', desc: 'Cancel up to 48 hours before' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 text-center hover:shadow-lg transition"
                whileHover={{ y: -4 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">{feature.icon}</div>
                <h3 className="font-bold text-sm sm:text-base text-gray-800 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Booking Form */}
          <motion.div variants={itemVariants}>
            <BookingForm roomPrice={150} onSubmit={handleBooking} />
          </motion.div>

          {/* Policies */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Booking Policies</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Free cancellation up to 48 hours before check-in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Check-in from 2:00 PM, Check-out by 11:00 AM</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Valid ID and credit card required at check-in</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">•</span>
                <span>Price includes breakfast and complimentary WiFi</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => {
          setShowConfirmation(false);
          setBookingData(null);
        }}
        title="Booking Confirmed!"
        type="success"
        confirmText="Done"
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

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Guest Name</span>
              <span className="font-semibold text-gray-800">{bookingData?.fullName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Email</span>
              <span className="font-semibold text-gray-800 text-sm">{bookingData?.email}</span>
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
              <span className="text-gray-600">Number of Guests</span>
              <span className="font-semibold text-gray-800">{bookingData?.guests}</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">
            A confirmation email has been sent to your email address. Please check your inbox for your booking reference number.
          </p>
        </motion.div>
      </Modal>
      <MobileBottomBookingButton />
    </motion.div>
  );
}

export default BookingPage;
