import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBookNow = () => {
    navigate('/booking');
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg dark:shadow-gray-800 z-50 transition-colors duration-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Optimized for mobile tap target */}
          <motion.div
            className="flex-shrink-0 min-h-[48px] flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/"
              className="text-xl sm:text-2xl font-bold text-amber-700 dark:text-amber-500 hover:text-amber-800 dark:hover:text-amber-400 transition font-playfair tracking-tight"
            >
              Gulab Lodge
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center space-x-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition font-medium font-inter text-sm">
              {t('nav.home')}
            </Link>
            <Link to="/rooms" className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition font-medium font-inter text-sm">
              {t('nav.rooms')}
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 transition font-medium font-inter text-sm">
              {t('nav.contact')}
            </Link>
          </motion.div>

          {/* Desktop Actions */}
          <motion.div
            className="hidden lg:flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <LanguageSwitcher />
            <ThemeToggle />
            <motion.button
              onClick={handleBookNow}
              className="bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-semibold font-inter text-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(180, 83, 9, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('nav.bookNow')}
            </motion.button>
          </motion.div>

          {/* Mobile/Tablet Controls - Optimized for touch */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-500 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition min-h-[48px] min-w-[48px] flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Navigation - Optimized for touch */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-200 overflow-y-auto max-h-[calc(100vh-64px)]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Navigation Links with Large Touch Targets */}
              <Link
                to="/"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 rounded-lg transition font-medium text-base min-h-[48px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/rooms"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 rounded-lg transition font-medium text-base min-h-[48px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.rooms')}
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-800 rounded-lg transition font-medium text-base min-h-[48px] flex items-center"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>

              {/* Primary CTA - Large Touch Target */}
              <motion.button
                onClick={handleBookNow}
                className="w-full mt-4 bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-4 rounded-lg hover:shadow-lg font-inter transition font-semibold text-base min-h-[52px] flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('nav.bookNow')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
