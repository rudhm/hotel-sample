import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  lazy = true,
  placeholder = 'bg-gray-200 dark:bg-gray-700',
  onLoad,
}) {
  const [isLoaded, setIsLoaded] = useState(!lazy);
  const [imageSrc, setImageSrc] = useState(lazy ? null : src);

  useEffect(() => {
    if (!lazy) return;

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      // Fallback: still show the image even if preload fails
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.src = src;
  }, [src, lazy, onLoad]);

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className={`absolute inset-0 ${placeholder} animate-pulse`} />
      )}

      {/* Actual Image */}
      <img
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        loading={lazy ? 'lazy' : 'eager'}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => {
          setIsLoaded(true);
          onLoad?.();
        }}
      />
    </motion.div>
  );
}

export default OptimizedImage;
