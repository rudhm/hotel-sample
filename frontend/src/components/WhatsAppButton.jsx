import { MessageCircle } from 'lucide-react';
import { generateWhatsAppMessage, getWhatsAppLink, contactInfo } from '../config/contact';

export default function WhatsAppButton({ roomName = null, checkIn = null, checkOut = null, className = "" }) {
  const message = generateWhatsAppMessage(roomName, checkIn, checkOut);
  const whatsappLink = getWhatsAppLink(message);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 px-4 py-2 
                   bg-green-500 hover:bg-green-600 text-white rounded-lg 
                   font-medium transition-colors duration-200 ${className}`}
    >
      <MessageCircle size={20} />
      <span>WhatsApp</span>
    </a>
  );
}
