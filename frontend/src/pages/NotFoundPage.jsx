import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 404 Animation */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-blue-600 drop-shadow-lg">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.button
            onClick={() => navigate('/')}
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home size={20} />
            Back to Home
          </motion.button>

          <motion.button
            onClick={() => navigate('/rooms')}
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse Rooms
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          className="mt-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 text-sm mb-3">Quick Links:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: 'Home', path: '/' },
              { name: 'Rooms', path: '/rooms' },
              { name: 'Contact', path: '/contact' },
              { name: 'Booking', path: '/booking' },
            ].map((link) => (
              <motion.button
                key={link.path}
                onClick={() => navigate(link.path)}
                className="text-blue-600 hover:text-blue-800 underline text-sm transition"
                whileHover={{ scale: 1.1 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default NotFoundPage;
