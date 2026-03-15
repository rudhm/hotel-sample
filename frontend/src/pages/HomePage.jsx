import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RoomGrid from '../components/RoomGrid';
import ReviewCard from '../components/ReviewCard';
import Footer from '../components/Footer';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';
import reviewsData from '../data/reviews.json';

function HomePage() {
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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      {/* Featured Rooms Section */}
      <section>
        <RoomGrid rooms={rooms.slice(0, 3)} amenities={amenities} />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="bg-white py-16"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Gulab Lodge</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Gulab Lodge is a budget-friendly lodging option located in Patehra, Maihar. We provide simple and comfortable rooms for travelers visiting the famous Maa Sharda Temple and the Maihar region. Conveniently located near the railway station and local markets, we're the ideal choice for pilgrims and short-term visitors seeking affordable, clean accommodation.
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
              className="p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-2xl mb-2">📍</p>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Railway Station Area, Patehra, Maihar – near Maa Sharda Temple and local markets.</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-2xl mb-2">💰</p>
              <h3 className="font-bold text-gray-900 mb-2">Affordable Rates</h3>
              <p className="text-gray-600 text-sm">Budget-friendly rooms starting from ₹600/night, perfect for travelers of all budgets.</p>
            </motion.div>

            <motion.div
              className="p-6 rounded-lg bg-amber-50 hover:bg-amber-100 transition"
              whileHover={{ y: -4 }}
            >
              <p className="text-2xl mb-2">⭐</p>
              <h3 className="font-bold text-gray-900 mb-2">Clean & Comfortable</h3>
              <p className="text-gray-600 text-sm">Well-maintained rooms with essential amenities and friendly 24-hour staff support.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Amenities Section */}
      <motion.section
        id="amenities"
        className="bg-white py-12"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Lodge Amenities</h2>
            <p className="text-gray-600 mb-8">Comfortable facilities for your stay in Maihar</p>
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
                className="flex flex-col items-center p-4 rounded-lg bg-amber-50 hover:bg-amber-100 transition"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Guest Reviews</h2>
            <p className="text-gray-600 mb-8">What our guests are saying</p>
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

      <Footer />
    </div>
  );
}

export default HomePage;
