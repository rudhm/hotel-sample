import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden pt-16">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
          variants={textVariants}
        >
          Welcome to Luxe Hotel
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md"
          variants={textVariants}
        >
          Experience the perfect blend of comfort and luxury
        </motion.p>

        {/* CTA Button */}
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition drop-shadow-lg"
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Rooms
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
