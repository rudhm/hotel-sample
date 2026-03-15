import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RoomGrid from '../components/RoomGrid';
import ReviewCard from '../components/ReviewCard';
import RatingStats from '../components/RatingStats';
import NewsletterSignup from '../components/NewsletterSignup';
import FAQSection from '../components/FAQSection';
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
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-32 lg:pb-0 transition-colors duration-200">
      <HeroSection />

      {/* Featured Rooms Section */}
      <section>
        <RoomGrid rooms={rooms.slice(0, 3)} amenities={amenities} />
      </section>

      {/* About Section - Mobile optimized */}
      <motion.section
        id="about"
        className="bg-white dark:bg-gray-900 py-12 sm:py-16 transition-colors duration-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">{t('about.title')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div
              className="p-4 sm:p-6 rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-xl sm:text-2xl mb-2">📍</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{t('about.location')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{t('about.locationDesc')}</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-xl sm:text-2xl mb-2">💰</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{t('about.affordable')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{t('about.affordableDesc')}</p>
            </motion.div>

            <motion.div
              className="p-4 sm:p-6 rounded-lg bg-amber-50 dark:bg-gray-800 hover:bg-amber-100 dark:hover:bg-gray-700 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-xl sm:text-2xl mb-2">⭐</p>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{t('about.comfort')}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{t('about.comfortDesc')}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Amenities Section - Mobile optimized */}
      <motion.section
        id="amenities"
        className="bg-gray-50 dark:bg-gray-900 py-12 sm:py-16 transition-colors duration-200"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-2 leading-tight">{t('amenities.title')}</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 font-inter leading-relaxed">{t('amenities.subtitle')}</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.id}
                className="flex flex-col items-center p-3 sm:p-4 rounded-lg bg-white dark:bg-gray-800 hover:bg-amber-50 dark:hover:bg-gray-700 transition border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <span className="text-2xl sm:text-3xl mb-1 sm:mb-2">
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
                <p className="text-xs sm:text-sm text-center text-gray-700 dark:text-gray-300 font-medium">{amenity.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Reviews Section - Mobile optimized */}
      <motion.section
        id="reviews"
        className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-2 leading-tight">Guest Reviews</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 font-inter leading-relaxed">What our guests are saying about their stay</p>
          </motion.div>

          {/* Rating Stats Overview */}
          <RatingStats reviews={reviews} />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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

      {/* Newsletter Signup Section */}
      <NewsletterSignup
        title={t('newsletter.title') || 'Subscribe to our Newsletter'}
        subtitle={t('newsletter.subtitle') || 'Get exclusive offers and updates delivered to your inbox.'}
      />

      {/* FAQ Section */}
      <FAQSection />

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
    </div>
  );
}

export default HomePage;
