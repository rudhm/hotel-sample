import React from 'react';
import RoomCard from './RoomCard';

function RoomGrid({ rooms, amenities }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Rooms</h2>
      <p className="text-gray-600 mb-8">Discover our luxurious collection of rooms</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} amenities={amenities} />
        ))}
      </div>
    </div>
  );
}

export default RoomGrid;
