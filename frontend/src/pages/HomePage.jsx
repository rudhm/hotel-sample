import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Tv, Wind, Home, Clock, Zap, Bed, Phone, Lock, Car } from 'lucide-react';
import ReviewCard from '../components/ReviewCard';
import MobileBottomBookingButton from '../components/MobileBottomBookingButton';
import FAQSection from '../components/FAQSection';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';
import reviewsData from '../data/reviews.json';

function HomePage({ cartCount = 0, setCartCount = () => {} }) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [rooms] = useState(roomsData);
  const [amenities] = useState(amenitiesData);
  const [reviews] = useState(reviewsData);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '-100px' },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const foodMenuData = [
    {
      id: 1,
      name: 'Aloo Parantha',
      category: 'Breakfast',
      description: 'Flaky whole wheat bread stuffed with spiced potatoes',
      price: 80,
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      name: 'Poha with Jalebi',
      category: 'Breakfast',
      description: 'Crispy flattened rice with sweet jalebi and fresh lime',
      price: 60,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Dahi Vada',
      category: 'Breakfast',
      description: 'Soft lentil dumplings served in creamy yogurt with sweet tamarind sauce',
      price: 70,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      name: 'Paneer Thali',
      category: 'Thalis',
      description: 'Complete meal with paneer curry, rice, roti, and vegetables',
      price: 250,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      name: 'Dal Makhani Thali',
      category: 'Thalis',
      description: 'Creamy lentils, basmati rice, rotli, and seasonal vegetables',
      price: 220,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500&q=80',
    },
    {
      id: 6,
      name: 'Vegetable Biryani',
      category: 'Mains',
      description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices',
      price: 200,
      image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-200 pb-24 md:pb-0">
      {/* ===== HERO SECTION ===== */}
      <motion.section
        className="relative h-screen max-h-[600px] sm:max-h-[700px] overflow-hidden mt-0 md:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1620393470010-85888e0a84d4?auto=format&fit=crop&w=1200&q=80)',
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Content */}
        <motion.div
          className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair mb-4 leading-tight drop-shadow-lg">
            Gulab Lodge
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 text-amber-100 font-light drop-shadow">
            Your Perfect Stay Near Maa Sharda Temple, Maihar
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xl mb-8 drop-shadow">
            Premium hospitality at budget prices. Experience comfort, cleanliness, and warm hospitality.
          </p>

          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <motion.button
              onClick={() => navigate('/booking')}
              className="flex-1 sm:flex-none bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(217, 119, 6, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              📅 Book Now
            </motion.button>
            <motion.button
              onClick={() => navigate('/rooms')}
              className="flex-1 sm:flex-none bg-white text-amber-700 hover:bg-gray-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🏠 View Rooms
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll down</p>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </motion.section>

      {/* ===== FEATURED ROOMS SECTION ===== */}
      <motion.section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto" {...fadeInUp}>
        <motion.div className="text-center mb-10 md:mb-12" {...fadeInUp}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-3">
            Featured Rooms
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Choose from our variety of comfortable, clean, and affordable rooms designed for every budget
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {rooms.slice(0, 3).map((room, index) => (
            <motion.div
              key={room.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-800"
              variants={staggerItem}
              whileHover={{ y: -8 }}
              onClick={() => navigate(`/rooms/${room.id}`)}
            >
              {/* Room Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ₹{room.price}/night
                </div>
              </div>

              {/* Room Info */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {room.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {room.description}
                </p>

                {/* Room Stats */}
                <div className="flex items-center gap-3 mb-4 text-sm text-gray-700 dark:text-gray-300">
                  <span>👥 {room.capacity} guests</span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    {room.rating} ({room.reviews})
                  </span>
                </div>

                {/* Amenities Icons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.amenities.slice(0, 3).map((amenityId) => {
                    const amenity = amenities.find(a => a.id === amenityId);
                    const iconMap = {
                      'wifi': <Wifi size={16} />,
                      'ac': <Wind size={16} />,
                      'tv': <Tv size={16} />,
                      'fan': <Wind size={16} />,
                      'home': <Home size={16} />,
                      'clock': <Clock size={16} />,
                      'bed': <Bed size={16} />,
                      'car': <Car size={16} />,
                    };
                    return (
                      <div key={amenity.id} className="bg-amber-50 dark:bg-gray-800 p-2 rounded-lg text-amber-700 dark:text-amber-500">
                        {iconMap[amenity.icon] || '✨'}
                      </div>
                    );
                  })}
                </div>

                {/* View Details Button */}
                <motion.button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-all min-h-[48px] text-sm sm:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/rooms/${room.id}`)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Rooms Button */}
        <motion.div className="text-center mt-10" {...fadeInUp}>
          <motion.button
            onClick={() => navigate('/rooms')}
            className="bg-gradient-to-r from-amber-700 to-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-all min-h-[48px] inline-flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(180, 83, 9, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            View All Rooms →
          </motion.button>
        </motion.div>
      </motion.section>

      {/* ===== PURE VEG DINING SECTION ===== */}
      <motion.section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-amber-50 dark:bg-gray-900" {...fadeInUp}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 md:mb-12" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-3">
              Pure Veg Dining
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Enjoy authentic Indian vegetarian cuisine, freshly prepared for your comfort and satisfaction
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {foodMenuData.map((item) => (
              <motion.div
                key={item.id}
                className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 dark:border-gray-700"
                variants={staggerItem}
                whileHover={{ y: -8 }}
              >
                {/* Food Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-200 dark:bg-gray-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {item.category}
                  </div>
                </div>

                {/* Food Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">
                      ₹{item.price}
                    </div>
                    <motion.button
                      onClick={() => setCartCount(prev => prev + 1)}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🛒 Add
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== AMENITIES SECTION ===== */}
      <motion.section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900" {...fadeInUp}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 md:mb-12" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-3">
              Premium Amenities
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              We offer world-class facilities and services for your comfort and convenience
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {amenities.map((amenity) => {
              const iconMap = {
                'wifi': '📶',
                'wind': '💨',
                'tv': '📺',
                'home': '🏡',
                'car': '🚗',
                'clock': '🕐',
                'bed': '🛏️',
                'bell': '🔔',
                'droplet': '💧',
                'lock': '🔒',
                'zap': '⚡',
              };
              return (
                <motion.div
                  key={amenity.id}
                  className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl border border-gray-200 dark:border-gray-700 text-center hover:border-amber-500 dark:hover:border-amber-500 transition-all"
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-2xl sm:text-3xl mb-2">
                    {iconMap[amenity.icon] || '✨'}
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">
                    {amenity.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <motion.section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" {...fadeInUp}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 md:mb-12" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-3">
              Why Choose Gulab Lodge?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              {
                icon: '📍',
                title: 'Prime Location',
                description: 'Located near Maa Sharda Temple and railway station in Maihar with easy access to all attractions.',
              },
              {
                icon: '💰',
                title: 'Affordable Luxury',
                description: 'Premium quality rooms at budget-friendly prices, perfect for pilgrims and travelers.',
              },
              {
                icon: '✨',
                title: 'Clean & Hygienic',
                description: 'Maintained to highest standards with daily housekeeping and 24-hour hygiene protocols.',
              },
              {
                icon: '👥',
                title: 'Friendly Staff',
                description: '24-hour customer support with multilingual staff ready to assist you anytime.',
              },
              {
                icon: '⭐',
                title: 'Guest Reviews',
                description: '4.5+ rating from hundreds of satisfied guests. Read real reviews from real travelers.',
              },
              {
                icon: '🚗',
                title: 'Free Parking',
                description: 'Complimentary parking available for all guests with secure vehicle storage.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-gray-800 dark:to-gray-900 p-5 sm:p-6 rounded-2xl border border-amber-200 dark:border-gray-700"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl sm:text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== REVIEWS SECTION ===== */}
      <motion.section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900" {...fadeInUp}>
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-10 md:mb-12" {...fadeInUp}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-3">
              Guest Reviews
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              What our guests are saying about their stay at Gulab Lodge
            </p>
          </motion.div>

          {/* Review Stats */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-8 border border-gray-200 dark:border-gray-700"
            {...fadeInUp}
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600">4.5</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600">{reviews.length}</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Total Reviews</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600">500+</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Happy Guests</p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600">98%</div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">Would Recommend</p>
              </div>
            </div>
          </motion.div>

          {/* Review Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair mb-4">
            Ready to Experience Gulab Lodge?
          </h2>
          <p className="text-lg sm:text-xl text-amber-100 mb-8">
            Book your comfortable stay at Gulab Lodge and immerse yourself in the spiritual beauty of Maihar and Maa Sharda Temple.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <motion.button
              onClick={() => navigate('/booking')}
              className="bg-white text-amber-700 hover:bg-amber-50 font-semibold py-3 px-8 rounded-lg transition-all min-h-[48px] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📅 Book Now
            </motion.button>
            <motion.button
              onClick={() => navigate('/contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 font-semibold py-3 px-8 rounded-lg transition-all min-h-[48px] flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 Contact Us
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* ===== FAQ SECTION ===== */}
      <FAQSection />

      {/* ===== MOBILE BOTTOM BOOKING BUTTON ===== */}
      <MobileBottomBookingButton />
    </div>
  );
}

export default HomePage;
