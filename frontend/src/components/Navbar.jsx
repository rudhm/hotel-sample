import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className="text-2xl font-bold text-amber-700 hover:text-amber-800 transition font-playfair tracking-tight">
              Gulab Lodge
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Link to="/" className="text-gray-700 hover:text-amber-700 transition font-medium font-inter">
              Home
            </Link>
            <Link to="/rooms" className="text-gray-700 hover:text-amber-700 transition font-medium font-inter">
              Rooms
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-amber-700 transition font-medium font-inter">
              Contact
            </Link>
          </motion.div>

          {/* Book Now Button */}
          <motion.button
            onClick={handleBookNow}
            className="hidden md:block bg-gradient-to-r from-amber-700 to-amber-800 text-white px-6 py-2 rounded-full hover:shadow-lg transition font-semibold font-inter"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(180, 83, 9, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            Book Now
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/rooms" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition" onClick={() => setIsOpen(false)}>
              Rooms
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded transition" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <button 
              onClick={handleBookNow}
              className="w-full mt-2 bg-gradient-to-r from-amber-700 to-amber-800 text-white px-4 py-2 rounded-full hover:shadow-lg font-inter transition font-semibold"
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
