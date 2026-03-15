import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import RoomCard from '../components/RoomCard';
import Footer from '../components/Footer';
import roomsData from '../data/rooms.json';
import amenitiesData from '../data/amenities.json';

function RoomsPage() {
  const [rooms] = useState(roomsData);
  const [amenities] = useState(amenitiesData);
  const [priceFilter, setPriceFilter] = useState([0, 500]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  // Filter rooms based on price and amenities
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const priceMatch = room.price >= priceFilter[0] && room.price <= priceFilter[1];
      const amenityMatch =
        selectedAmenities.length === 0 ||
        selectedAmenities.some((amenity) => room.amenities.includes(amenity));
      return priceMatch && amenityMatch;
    });
  }, [rooms, priceFilter, selectedAmenities]);

  const toggleAmenity = (amenityId) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenityId) ? prev.filter((a) => a !== amenityId) : [...prev, amenityId],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-2">Our Rooms</h1>
            <p className="text-blue-100">Discover the perfect room for your stay</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <aside className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Filters</h3>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-4">Price Range</h4>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceFilter[0]}
                      onChange={(e) =>
                        setPriceFilter([parseInt(e.target.value), priceFilter[1]])
                      }
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="500"
                      value={priceFilter[1]}
                      onChange={(e) =>
                        setPriceFilter([priceFilter[0], parseInt(e.target.value)])
                      }
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600">
                      ${priceFilter[0]} - ${priceFilter[1]}
                    </p>
                  </div>
                </div>

                {/* Amenities Filter */}
                <div>
                  <h4 className="font-semibold text-gray-700 mb-4">Amenities</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {amenities.slice(0, 8).map((amenity) => (
                      <label key={amenity.id} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity.id)}
                          onChange={() => toggleAmenity(amenity.id)}
                          className="rounded border-gray-300"
                        />
                        <span className="ml-2 text-gray-700">{amenity.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content - Room Grid */}
            <main className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gray-600">
                  Showing {filteredRooms.length} of {rooms.length} rooms
                </p>
              </div>

              {filteredRooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} amenities={amenities} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No rooms match your filters.</p>
                  <button
                    onClick={() => {
                      setPriceFilter([0, 500]);
                      setSelectedAmenities([]);
                    }}
                    className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default RoomsPage;
