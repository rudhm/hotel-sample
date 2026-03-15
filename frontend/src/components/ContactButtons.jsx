import { MessageCircle, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo, getPhoneLink, getEmailLink, generateWhatsAppMessage, getWhatsAppLink } from '../config/contact';

export default function ContactButtons({ 
  variant = 'horizontal', // 'horizontal' | 'vertical' | 'compact'
  showLabels = true,
  size = 'md', // 'sm' | 'md' | 'lg'
  className = '',
  includeWhatsApp = true,
  includePhone = true,
  includeEmail = true,
  subject = ''
}) {
  
  const sizeClasses = {
    sm: { button: 'px-2 py-1 text-xs', icon: 16 },
    md: { button: 'px-4 py-2 text-sm', icon: 20 },
    lg: { button: 'px-6 py-3 text-base', icon: 24 }
  };

  const buttons = [];
  
  if (includePhone) {
    buttons.push({
      id: 'phone',
      icon: Phone,
      label: 'Call',
      color: 'blue',
      href: getPhoneLink(),
      external: false
    });
  }

  if (includeWhatsApp) {
    buttons.push({
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      color: 'green',
      href: getWhatsAppLink(generateWhatsAppMessage(subject)),
      external: true
    });
  }

  if (includeEmail) {
    buttons.push({
      id: 'email',
      icon: Mail,
      label: 'Email',
      color: 'amber',
      href: getEmailLink(subject),
      external: false
    });
  }

  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
    green: 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
    amber: 'bg-amber-500 hover:bg-amber-600 dark:bg-amber-600 dark:hover:bg-amber-700'
  };

  return (
    <motion.div
      className={`flex ${variant === 'vertical' ? 'flex-col' : 'flex-row'} gap-2 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {buttons.map((btn, idx) => {
        const IconComponent = btn.icon;
        return (
          <motion.a
            key={btn.id}
            href={btn.href}
            target={btn.external ? '_blank' : '_self'}
            rel={btn.external ? 'noopener noreferrer' : ''}
            className={`inline-flex items-center justify-center gap-2 rounded-lg text-white font-medium transition-colors duration-200 ${sizeClasses[size].button} ${colorClasses[btn.color]}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconComponent size={sizeClasses[size].icon} />
            {showLabels && <span>{btn.label}</span>}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
