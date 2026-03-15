import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

function NewsletterSignup({ title = 'Subscribe to our Newsletter', subtitle = 'Get exclusive offers and updates delivered to your inbox.' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Simulate API call (in real app, send to backend/service)
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');

      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    }, 800);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-y border-amber-200 dark:border-amber-800"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 dark:text-white mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400 mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        {/* Signup Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading' || status === 'success'}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-8 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed dark:from-amber-600 dark:to-orange-600 dark:hover:from-amber-700 dark:hover:to-orange-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'loading' ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Subscribing...
              </span>
            ) : (
              'Subscribe'
            )}
          </motion.button>
        </motion.form>

        {/* Status Messages */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: status !== 'idle' ? 1 : 0,
            y: status !== 'idle' ? 0 : 10,
          }}
          transition={{ duration: 0.3 }}
        >
          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-medium">
              <CheckCircle size={20} />
              {message}
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center justify-center gap-2 text-red-600 dark:text-red-400 font-medium">
              <AlertCircle size={20} />
              {message}
            </div>
          )}
        </motion.div>

        {/* Privacy Notice */}
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </motion.section>
  );
}

export default NewsletterSignup;
