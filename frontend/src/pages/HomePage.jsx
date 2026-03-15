import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import RoomGrid from '../components/RoomGrid';
import ReviewCard from '../components/ReviewCard';
import Footer from '../components/Footer';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';
import reviewsData from '../data/reviews.json';

function HomePage() {
  const [rooms] = useState(roomsData);
  const [amenities] = useState(amenitiesData);
  const [reviews] = useState(reviewsData);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      {/* Featured Rooms Section */}
      <section>
        <RoomGrid rooms={rooms.slice(0, 3)} amenities={amenities} />
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Hotel Amenities</h2>
          <p className="text-gray-600 mb-8">Enjoy world-class facilities and services</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {amenities.map((amenity) => (
              <div
                key={amenity.id}
                className="flex flex-col items-center p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition"
              >
                <span className="text-3xl mb-2">
                  {
                    {
                      wifi: '📶',
                      wind: '💨',
                      tv: '📺',
                      home: '🏡',
                      waves: '🌊',
                      bottle: '🍾',
                      droplet: '💧',
                      sofa: '🛋️',
                      star: '⭐',
                      briefcase: '💼',
                      leaf: '🍃',
                      gamepad2: '🎮',
                      snowflake: '❄️',
                      users: '👥',
                      bell: '🔔',
                      zap: '⚡',
                    }[amenity.icon] || '✨'
                  }
                </span>
                <p className="text-sm text-center text-gray-700 font-medium">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Guest Reviews</h2>
          <p className="text-gray-600 mb-8">What our guests are saying</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Stay?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Browse our complete collection of rooms and find your perfect accommodation.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-lg transition">
            View All Rooms
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
