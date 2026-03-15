import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function MobileBottomBookingButton() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-3 z-40 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl dark:shadow-gray-900"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex gap-2 max-w-7xl mx-auto">
        <motion.button
          onClick={() => navigate('/booking')}
          className="flex-1 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Phone size={18} />
          <span>Book Now</span>
        </motion.button>
        <div className="flex-1">
          <WhatsAppButton className="w-full justify-center rounded-lg py-3" />
        </div>
      </div>
    </motion.div>
  );
}
