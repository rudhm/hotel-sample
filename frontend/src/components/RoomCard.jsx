import React from 'react';
import { Star, Users } from 'lucide-react';
import AmenityBadge from './AmenityBadge';

function RoomCard({ room, amenities }) {
  const roomAmenities = amenities.filter((a) => room.amenities.includes(a.id));

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 duration-300">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${room.price}/night
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{room.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{room.description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(room.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {room.rating} ({room.reviews} reviews)
          </span>
        </div>

        {/* Capacity */}
        <div className="flex items-center mb-4 text-gray-700">
          <Users size={18} className="mr-2" />
          <span className="text-sm">Up to {room.capacity} guests</span>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {roomAmenities.slice(0, 4).map((amenity) => (
              <AmenityBadge key={amenity.id} amenity={amenity} />
            ))}
            {room.amenities.length > 4 && (
              <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                +{room.amenities.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Book Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
          View & Book
        </button>
      </div>
    </div>
  );
}

export default RoomCard;
