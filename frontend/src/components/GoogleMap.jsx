import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { contactInfo, nearbyAttractions, calculateDistance, getDirectionsLink, getGoogleMapsEmbedUrl } from '../config/contact';

export default function GoogleMap() {
  const embedUrl = getGoogleMapsEmbedUrl(contactInfo.coordinates.lat, contactInfo.coordinates.lng);

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Embedded Map */}
      <motion.div
        className="rounded-lg overflow-hidden shadow-lg"
        whileHover={{ shadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
      >
        <iframe
          src={embedUrl}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </motion.div>

      {/* Quick Navigation & Attractions */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Get Directions Button */}
        <motion.a
          href={getDirectionsLink(contactInfo.coordinates.lat, contactInfo.coordinates.lng)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(37, 99, 235, 0.3)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Navigation size={20} />
          <span>Get Directions</span>
        </motion.a>

        {/* Hotel Address Card */}
        <motion.div
          className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
        >
          <MapPin size={20} className="text-amber-600 dark:text-amber-500 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold uppercase">Location</p>
            <p className="text-sm text-gray-900 dark:text-white font-semibold">Patehra, Maihar</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Nearby Attractions with Distances */}
      <motion.div
        className="space-y-3"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Nearby Attractions</h3>
        {nearbyAttractions.map((attraction, idx) => {
          const distance = calculateDistance(
            contactInfo.coordinates.lat,
            contactInfo.coordinates.lng,
            attraction.coordinates.lat,
            attraction.coordinates.lng
          );

          return (
            <motion.div
              key={attraction.id}
              className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-all"
              whileHover={{ y: -2 }}
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            >
              <div className="text-2xl flex-shrink-0">{attraction.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 dark:text-white">{attraction.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{attraction.description}</p>
                <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1">
                  📍 {distance} km away
                </p>
              </div>
              <motion.a
                href={getDirectionsLink(attraction.coordinates.lat, attraction.coordinates.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Route
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
