import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Gallery({ images = [] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images || images.length === 0) {
    return <div className="bg-gray-200 w-full h-96 flex items-center justify-center rounded-xl">No images available</div>;
  }

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <motion.div 
        className="relative w-full h-96 md:h-[550px] overflow-hidden bg-gray-100 rounded-xl shadow-2xl cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsFullscreen(true)}
      >
        <motion.img
          key={selectedIndex}
          src={images[selectedIndex]}
          alt="Room"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-center">
            <p className="font-playfair text-xl">Click to expand</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition z-10 shadow-lg"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={28} className="text-gray-800" />
            </motion.button>
            <motion.button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition z-10 shadow-lg"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={28} className="text-gray-800" />
            </motion.button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-inter font-medium">
            {selectedIndex + 1} / {images.length}
          </div>
        )}
      </motion.div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <motion.div
          className="mt-6 flex gap-3 overflow-x-auto pb-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition border-3 shadow-md hover:shadow-lg ${
                selectedIndex === index ? 'border-amber-700 scale-105' : 'border-gray-200 hover:border-amber-400'
              }`}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsFullscreen(false)}
        >
          <motion.div
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            {/* Close Button */}
            <motion.button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-3 transition z-10 shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <X size={28} className="text-gray-800" />
            </motion.button>

            {/* Full Image */}
            <motion.img
              key={`fullscreen-${selectedIndex}`}
              src={images[selectedIndex]}
              alt="Full size room"
              className="w-full h-full object-contain rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition shadow-lg"
                  whileHover={{ scale: 1.15 }}
                >
                  <ChevronLeft size={32} className="text-gray-800" />
                </motion.button>
                <motion.button
                  onClick={(e) => { e.stopPropagation(); goToNext(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition shadow-lg"
                  whileHover={{ scale: 1.15 }}
                >
                  <ChevronRight size={32} className="text-gray-800" />
                </motion.button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Gallery;
