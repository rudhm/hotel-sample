import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">Luxe Hotel</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="/rooms" className="text-gray-700 hover:text-blue-600 transition">
              Rooms
            </a>
            <a href="#amenities" className="text-gray-700 hover:text-blue-600 transition">
              Amenities
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition">
              Reviews
            </a>
          </div>

          {/* Book Now Button */}
          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Book Now
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Home
            </a>
            <a href="/rooms" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Rooms
            </a>
            <a href="#amenities" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Amenities
            </a>
            <a href="#reviews" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded">
              Reviews
            </a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
