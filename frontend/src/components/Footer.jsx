import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import ContactButtons from './ContactButtons';

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Gulab Lodge
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Budget-friendly lodging near Maihar Railway Station, perfect for travelers and pilgrims visiting Maa Sharda Temple.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-amber-400 transition-colors duration-200">Home</Link></li>
              <li><Link to="/rooms" className="hover:text-amber-400 transition-colors duration-200">Rooms</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors duration-200">Contact</Link></li>
              <li><a href="#amenities" className="hover:text-amber-400 transition-colors duration-200">Amenities</a></li>
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Policies</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Cancellation</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-amber-400" />
                <span>Railway Station Area, Patehra, Maihar 485771, MP, India</span>
              </li>
            </ul>
            <ContactButtons 
              variant="vertical"
              size="sm"
              showLabels={true}
              className="w-full"
            />
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Gulab Lodge. All rights reserved. Patehra, Maihar, Madhya Pradesh.
            </p>
            <motion.div
              className="flex gap-6 mt-4 md:mt-0"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
