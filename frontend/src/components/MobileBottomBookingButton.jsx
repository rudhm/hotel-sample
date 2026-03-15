import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function MobileBottomBookingButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-3 py-2 z-40 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-2xl dark:shadow-2xl dark:shadow-black/50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex gap-2 max-w-7xl mx-auto items-stretch">
        <motion.button
          onClick={() => navigate('/booking')}
          className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base min-h-[52px]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar size={20} />
          <span className="hidden sm:inline">Book Now</span>
          <span className="sm:hidden">Book</span>
        </motion.button>
        <motion.button
          onClick={() => window.location.href = 'tel:+919876543210'}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base min-h-[52px]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={20} />
          <span className="hidden sm:inline">Call</span>
        </motion.button>
        <div className="flex-1 min-h-[52px]">
          <WhatsAppButton className="w-full h-full justify-center rounded-xl py-3 flex items-center text-sm sm:text-base" />
        </div>
      </div>
    </motion.div>
  );
}
