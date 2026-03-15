import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

function HeroSection() {
  const navigate = useNavigate();

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
    <div className="relative h-[550px] md:h-[700px] overflow-hidden pt-16">
      {/* Background Image with Lazy Loading */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=85")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />

      {/* Gradient Overlay - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl font-playfair tracking-tight"
          variants={textVariants}
        >
          Gulab Lodge
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-amber-100 mb-4 drop-shadow-lg max-w-3xl font-inter font-light"
          variants={textVariants}
        >
          Comfortable and affordable lodging near Maihar Railway Station
        </motion.p>

        {/* Location Info */}
        <motion.p
          className="text-sm md:text-base text-gray-200 mb-10 drop-shadow-md font-inter"
          variants={textVariants}
        >
          📍 Patehra, Maihar | ⭐ 3.2 Rating (212 Reviews)
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          variants={textVariants}
        >
          <motion.button
            onClick={() => navigate('/rooms')}
            className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg font-semibold transition-all shadow-xl hover:shadow-2xl font-inter font-medium"
            whileHover={{ scale: 1.08, boxShadow: '0 25px 50px rgba(180, 83, 9, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View Rooms
          </motion.button>
          <WhatsAppButton roomName="Gulab Lodge" className="px-10 md:px-12 py-4 md:py-5 text-lg rounded-full font-inter font-medium" />
          <motion.button
            onClick={() => navigate('/contact')}
            className="bg-white/20 hover:bg-white/30 text-white px-10 md:px-12 py-4 md:py-5 rounded-full text-lg font-semibold transition-all border border-white/40 backdrop-blur-sm font-inter font-medium"
            whileHover={{ scale: 1.08, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 text-white opacity-70"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            whileHover={{ opacity: 1 }}
            className="flex flex-col items-center gap-3"
          >
            <p className="text-xs uppercase tracking-widest font-semibold font-inter">Scroll</p>
            <ChevronDown size={32} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
