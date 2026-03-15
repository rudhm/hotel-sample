import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RoomGrid from '../components/RoomGrid';
import ReviewCard from '../components/ReviewCard';
import NearbyAttractions from '../components/NearbyAttractions';
import Footer from '../components/Footer';
import MobileBottomBookingButton from '../components/MobileBottomBookingButton';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';
import reviewsData from '../data/reviews.json';

function HomePage() {
  const { t } = useLanguage();
  const [rooms] = useState(roomsData);
  const [amenities] = useState(amenitiesData);
  const [reviews] = useState(reviewsData);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
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
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-28 md:pb-0 transition-colors duration-200">
      <Navbar />
      <HeroSection />

      {/* Featured Rooms Section */}
      <section>
        <RoomGrid rooms={rooms.slice(0, 3)} amenities={amenities} />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-white dark:bg-gray-900 py-16 transition-colors duration-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-4">{t('home.aboutTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {t('home.aboutDescription')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              className="p-6 rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-2xl mb-2">📍</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Location</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Railway Station Area, Patehra, Maihar – near Maa Sharda Temple and local markets.</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-2xl mb-2">💰</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Affordable Rates</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Budget-friendly rooms starting from ₹600/night, perfect for travelers of all budgets.</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-2xl mb-2">⭐</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">Clean & Comfortable</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Well-maintained rooms with essential amenities and friendly 24-hour staff support.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Amenities Section */}
      <motion.section
        id="amenities"
        className="bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-2">{t('home.amenitiesTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-inter">{t('home.amenitiesSubtitle')}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.id}
                className="flex flex-col items-center p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-3xl mb-2">
                  {
                    {
                      wifi: '📶',
                      wind: '💨',
                      tv: '📺',
                      home: '🏡',
                      waves: '🌊',
                      bottle: '🍾',
                      droplet: '💧',
                      sofa: '🛋️',
                      star: '⭐',
                      briefcase: '💼',
                      leaf: '🍃',
                      gamepad2: '🎮',
                      snowflake: '❄️',
                      users: '👥',
                      bell: '🔔',
                      zap: '⚡',
                      car: '🚗',
                      clock: '🕐',
                      bed: '🛏️',
                      phone: '☎️',
                      lock: '🔒',
                    }[amenity.icon] || '✨'
                  }
                </span>
                <p className="text-sm text-center text-gray-700 font-medium">{amenity.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews Section */}
      <motion.section
        id="reviews"
        className="py-12 bg-gray-50"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-2">{t('home.reviewsTitle')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 font-inter">{t('home.reviewsSubtitle')}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Nearby Attractions Section */}
      <NearbyAttractions />

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4">Plan Your Maihar Visit</h2>
            <p className="text-xl text-amber-100 mb-8">
              Book your comfortable stay at Gulab Lodge and explore the sacred Maa Sharda Temple and local attractions.
            </p>
          </motion.div>
          <motion.button
            className="bg-white text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold text-lg transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Rooms
          </motion.button>
        </div>
      </motion.section>

      <MobileBottomBookingButton />
      <Footer />
    </div>
  );
}

export default HomePage;
