import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import WhatsAppButton from './WhatsAppButton';
import ContactButtons from './ContactButtons';

function HeroSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

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
    <div className="relative h-[400px] sm:h-[500px] lg:h-[700px] overflow-hidden pt-16">
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

      {/* Gradient Overlay - Enhanced for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

      {/* Content Overlay - Mobile optimized */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title - Responsive text sizing */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl font-playfair tracking-tight leading-tight"
          variants={textVariants}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Subtitle - Mobile optimized */}
        <motion.p
          className="text-base sm:text-lg md:text-2xl text-amber-100 mb-2 sm:mb-3 md:mb-4 drop-shadow-lg max-w-2xl sm:max-w-3xl font-inter font-light leading-relaxed"
          variants={textVariants}
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* Location Info - Hidden on very small screens */}
        <motion.p
          className="hidden sm:block text-xs sm:text-sm md:text-base text-gray-200 mb-6 sm:mb-8 md:mb-10 drop-shadow-md font-inter"
          variants={textVariants}
        >
          {t('hero.location')}
        </motion.p>

        {/* CTA Buttons - Mobile first stacking */}
        <motion.div
          className="flex flex-col w-full sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center max-w-md sm:max-w-full"
          variants={textVariants}
        >
          <motion.button
            onClick={() => navigate('/rooms')}
            className="bg-amber-700 hover:bg-amber-800 active:bg-amber-900 text-white px-6 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-lg sm:rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all shadow-xl hover:shadow-2xl font-inter font-medium min-h-[48px] flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('hero.viewRooms')}
          </motion.button>
          <WhatsAppButton roomName={t('hero.title')} className="px-6 sm:px-10 lg:px-12 py-3 sm:py-4 lg:py-5 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-full font-inter font-medium min-h-[48px]" />
        </motion.div>

        {/* Quick Contact Options - Stacked on mobile */}
        <motion.div
          className="mt-6 sm:mt-8 w-full"
          variants={textVariants}
        >
          <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4 font-inter">{t('hero.quickContact')}:</p>
          <ContactButtons
            variant="horizontal"
            size="sm"
            showLabels={false}
            className="justify-center gap-3"
            includeEmail={false}
          />
        </motion.div>

        {/* Scroll Indicator - Hidden on small screens */}
        <motion.div
          className="hidden sm:block absolute bottom-6 sm:bottom-10 text-white opacity-70"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <motion.div
            whileHover={{ opacity: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-xs uppercase tracking-widest font-semibold font-inter">Scroll</p>
            <ChevronDown size={24} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
