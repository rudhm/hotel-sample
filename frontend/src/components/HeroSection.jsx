import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
    <div className="relative h-[500px] md:h-[650px] overflow-hidden pt-16">
      {/* Background Image with Lazy Loading */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=85")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-xl font-serif"
          variants={textVariants}
        >
          Gulab Lodge – Maihar
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-gray-100 mb-8 drop-shadow-lg max-w-2xl font-light"
          variants={textVariants}
        >
          Comfortable and affordable lodging near Maihar Railway Station, ideal for travelers and pilgrims
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate('/rooms')}
          className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
          variants={textVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(180, 83, 9, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          Book Your Room
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 text-white opacity-80"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            whileHover={{ opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-sm uppercase tracking-widest font-semibold">Scroll to explore</p>
            <ChevronDown size={28} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
