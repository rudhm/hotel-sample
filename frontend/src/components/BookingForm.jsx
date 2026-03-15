import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, AlertCircle } from 'lucide-react';

function BookingForm({ roomPrice = 0, onSubmit = () => {} }) {
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
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (formData.checkIn && formData.checkOut && new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      newErrors.checkOut = 'Check-out must be after check-in';
    }
    if (!formData.guests || formData.guests < 1) newErrors.guests = 'At least 1 guest required';
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
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
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Check-in Date */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Calendar size={16} />
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.checkIn ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.checkIn && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Calendar size={16} />
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.checkOut ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.checkOut && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Users size={16} />
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.guests ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
            }`}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'Guest' : 'Guests'}
              </option>
            ))}
          </select>
          {errors.guests && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.fullName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
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
          <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
              errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-blue-500'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <AlertCircle size={14} /> {errors.email}
            </p>
          )}
        </motion.div>

        {/* Price Summary */}
        {calculateNights() > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-4"
          >
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">${roomPrice} × {calculateNights()} {calculateNights() === 1 ? 'night' : 'nights'}</span>
              <span className="font-semibold">${(calculateNights() * roomPrice).toFixed(2)}</span>
            </div>
            <div className="border-t border-blue-200 pt-2 flex justify-between">
              <span className="font-bold text-gray-800">Total Price</span>
              <span className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Proceed to Booking
        </motion.button>
      </form>
    </motion.div>
  );
}

export default BookingForm;
