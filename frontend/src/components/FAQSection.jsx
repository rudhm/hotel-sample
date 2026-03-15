import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 transition-all hover:shadow-md dark:hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-amber-700 dark:text-amber-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      {/* Answer Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-6 py-4 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'What are the check-in and check-out times?',
      answer: 'Check-in is available from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available upon request. Please contact us in advance for such arrangements.',
    },
    {
      question: 'Is there free WiFi available?',
      answer: 'Yes, complimentary high-speed WiFi is available in all our rooms and common areas at Gulab Lodge. You will receive the WiFi password upon check-in.',
    },
    {
      question: 'Do you provide transportation services?',
      answer: 'We are located near Maihar Railway Station, making it easily accessible. While we don\'t provide direct transportation, we can assist in arranging local transport and taxi services for our guests.',
    },
    {
      question: 'What amenities are included in the room?',
      answer: 'All our rooms come with essential amenities including attached bathroom, TV, fan or AC (depending on room type), and 24-hour front desk service. Some rooms also have balconies with views of the town.',
    },
    {
      question: 'Can I visit Maa Sharda Temple from the lodge?',
      answer: 'Yes! Gulab Lodge is conveniently located near Maa Sharda Temple, one of the most visited pilgrimage sites. The temple is approximately 2-3 km away, easily accessible by local transport.',
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we offer free parking for our guests. Limited parking space is available at the lodge. Please inform us about your vehicle details during booking.',
    },
    {
      question: 'Do you accept online bookings?',
      answer: 'Yes, we accept bookings through our website and WhatsApp. You can also call us directly at +91-8109880019 for reservations and inquiries.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Cancellations made 48 hours before check-in are fully refundable. Cancellations within 48 hours may incur a charge. Please contact us for specific details regarding your booking.',
    },
  ];

  return (
    <motion.section
      className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about Gulab Lodge, bookings, and facilities.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
            Didn't find your answer?
          </h3>
          <p className="text-blue-800 dark:text-blue-400 mb-4">
            Our team is here to help! Contact us via WhatsApp, phone, or email for any other inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/918109880019?text=Hi%2C%20I%20have%20a%20question%20about%20Gulab%20Lodge"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg font-medium transition"
            >
              Chat on WhatsApp
            </a>
            <a
              href="tel:+918109880019"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg font-medium transition"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FAQSection;
