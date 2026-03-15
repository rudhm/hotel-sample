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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Hotel Amenities</h2>
            <p className="text-gray-600 mb-8">Enjoy world-class facilities and services</p>
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
                className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
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
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16"
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
            <h2 className="text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Browse our complete collection of rooms and find your perfect accommodation.
            </p>
          </motion.div>
          <motion.button
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition"
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
