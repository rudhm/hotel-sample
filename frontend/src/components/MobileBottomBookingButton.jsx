import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function MobileBottomBookingButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 lg:hidden bg-white dark:bg-gray-900 border-t-2 border-gray-200 dark:border-gray-700 px-3 py-3 z-40 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl dark:shadow-gray-900"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-2 max-w-7xl mx-auto items-stretch">
        <motion.button
          onClick={() => navigate('/booking')}
          className="flex-1 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 text-sm sm:text-base font-inter font-medium min-h-[52px]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <Calendar size={20} />
          <span>Book Room</span>
        </motion.button>
        <div className="flex-1 min-h-[52px]">
          <WhatsAppButton className="w-full h-full justify-center rounded-lg py-3 flex items-center" />
        </div>
      </div>
    </motion.div>
  );
}
