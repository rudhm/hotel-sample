import { MessageCircle } from 'lucide-react';
import { generateWhatsAppMessage, getWhatsAppLink, contactInfo } from '../config/contact';
import { motion } from 'framer-motion';

export default function WhatsAppButton({ roomName = null, checkIn = null, checkOut = null, className = "" }) {
  const message = generateWhatsAppMessage(roomName, checkIn, checkOut);
  const whatsappLink = getWhatsAppLink(message);

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 
                   bg-green-600 hover:bg-green-700 text-white rounded-lg 
                   font-medium transition-all duration-200 min-h-[48px] ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </motion.a>
  );
}
