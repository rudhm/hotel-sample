import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, AlertCircle } from 'lucide-react';
import Modal from '../components/Modal';
import WhatsAppButton from '../components/WhatsAppButton';
import { contactInfo } from '../config/contact';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

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
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmation(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
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
      className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact Gulab Lodge
          </motion.h1>
          <motion.p
            className="text-lg text-amber-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Plan your stay at Gulab Lodge in Maihar. Reach out to us for bookings and information!
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Contact Info Cards */}
          {[
            {
              icon: Phone,
              title: 'Phone',
              value: '+91 XXXXXXXXXX',
              desc: 'Available 24/7',
            },
            {
              icon: Mail,
              title: 'Email',
              value: 'stay@gulablodge.com',
              desc: 'We reply within 24 hours',
            },
            {
              icon: MapPin,
              title: 'Address',
              value: 'Railway Station Area',
              desc: 'Patehra, Maihar, MP 485771, India',
            },
          ].map((contact, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition"
              whileHover={{ y: -4 }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 p-4 rounded-full">
                  <contact.icon size={28} className="text-amber-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{contact.title}</h3>
              <p className="font-semibold text-gray-700 mb-1">{contact.value}</p>
              <p className="text-sm text-gray-600">{contact.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.name ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-500'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.15 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-500'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition ${
                    errors.subject ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-500'
                  }`}
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.subject}
                  </p>
                )}
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:ring-amber-500'
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.message}
                  </p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg hover:bg-amber-800 transition"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Map and Social Media */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-80"
              whileHover={{ shadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-amber-700 mx-auto mb-2" />
                  <p className="text-gray-600">Gulab Lodge Location</p>
                  <p className="text-sm text-gray-500">Railway Station Area, Patehra, Maihar 485771</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
              whileHover={{ shadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Connect With Us</h3>
              <div className="flex gap-4 mb-6">
                <WhatsAppButton className="flex-1 justify-center rounded-lg" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 
                           bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                           font-medium transition-colors duration-200"
                >
                  <Phone size={20} />
                  <span>Call</span>
                </a>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 mb-6"></div>

              <h4 className="font-bold text-gray-800 dark:text-white mb-3">Social Media</h4>
              <div className="flex gap-4 mb-6">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-700 hover:text-white transition"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-2">Business Hours</h4>
                <p className="text-gray-600 text-sm">
                  Open 24/7 for reservations<br />
                  Perfect for travelers arriving anytime
                </p>
              </div>

              {/* Nearby Attractions */}
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Nearby Attractions</h4>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>🏛️ <strong>Maa Sharda Temple</strong> – Famous pilgrimage site</li>
                  <li>🚂 <strong>Railway Station</strong> – 5 minutes away</li>
                  <li>🛍️ <strong>Local Markets</strong> – Shopping & dining nearby</li>
                  <li>📍 <strong>Historic Town</strong> – Rich cultural heritage</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        title="Message Sent!"
        type="success"
        confirmText="Close"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <p className="text-gray-700">
            Thank you for contacting Luxe Hotel! We've received your message and will get back to you as soon as possible.
          </p>
          <p className="text-sm text-gray-600">
            A confirmation email has been sent to your email address.
          </p>
        </motion.div>
      </Modal>
    </motion.div>
  );
}

export default ContactPage;
