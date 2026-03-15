import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function BookingForm({ roomPrice = 0, onSubmit = () => {} }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    fullName: '',
    email: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.checkIn) newErrors.checkIn = t('booking.checkIn') + ' is required';
    if (!formData.checkOut) newErrors.checkOut = t('booking.checkOut') + ' is required';
    if (formData.checkIn && formData.checkOut && new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'At least 1 guest required';
    if (!formData.fullName.trim()) newErrors.fullName = t('contact.name') + ' is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      return Math.max(nights, 1);
    }
    return 0;
  };

  const totalPrice = calculateNights() * roomPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-6">{t('booking.title')}</h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Check-in Date */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
            <Calendar size={16} />
            {t('booking.checkIn')}
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-3 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-base ${
              errors.checkIn ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } dark:bg-gray-700 dark:text-white min-h-[48px]`}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.checkIn}
            </p>
          )}
        </motion.div>

        {/* Check-out Date */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
            <Calendar size={16} />
            {t('booking.checkOut')}
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-3 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-base ${
              errors.checkOut ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } dark:bg-gray-700 dark:text-white min-h-[48px]`}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.checkOut}
            </p>
          )}
        </motion.div>

        {/* Number of Guests */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
            <Users size={16} />
            {t('booking.guests')}
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full px-3 sm:px-4 py-3 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-base ${
              errors.guests ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } dark:bg-gray-700 dark:text-white min-h-[48px]`}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          {errors.guests && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.guests}
            </p>
          )}
        </motion.div>

        {/* Full Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('contact.name')}</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-3 sm:px-4 py-3 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-base ${
              errors.fullName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } dark:bg-gray-700 dark:text-white min-h-[48px]`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.fullName}
            </p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('contact.email')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-3 sm:px-4 py-3 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 transition text-base ${
              errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } dark:bg-gray-700 dark:text-white min-h-[48px]`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.email}
            </p>
          )}
        </motion.div>

        {/* Price Summary - Mobile optimized */}
        {calculateNights() > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-3 sm:p-4"
          >
            <div className="flex justify-between mb-2 text-xs sm:text-sm">
              <span className="text-gray-700 dark:text-gray-300">₹{roomPrice} × {calculateNights()} {calculateNights() === 1 ? t('booking.night') : t('booking.nights')}</span>
              <span className="font-semibold text-gray-900 dark:text-white">₹{(calculateNights() * roomPrice).toFixed(2)}</span>
            </div>
            <div className="border-t border-blue-200 dark:border-blue-800 pt-2 flex justify-between">
              <span className="font-bold text-gray-800 dark:text-white">{t('booking.total')}</span>
              <span className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">₹{totalPrice.toFixed(2)}</span>
            </div>
          </motion.div>
        )}

        {/* Submit Button - Large touch target */}
        <motion.button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-3 sm:py-4 rounded-lg transition text-sm sm:text-base min-h-[52px] flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('booking.bookRoom')}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default BookingForm;
