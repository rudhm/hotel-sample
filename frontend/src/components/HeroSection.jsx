import React from 'react';
import { ChevronDown } from 'lucide-react';

function HeroSection() {
  return (
    <div className="relative h-[500px] md:h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Welcome to Luxe Hotel
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-md">
          Experience the perfect blend of comfort and luxury
        </p>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 drop-shadow-lg">
          Explore Rooms
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown size={32} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
