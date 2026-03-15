// Gulab Lodge contact information
export const contactInfo = {
  phone: '+918109880019', // Real contact number for Gulab Lodge
  whatsappNumber: '918109880019', // WhatsApp format (country code without +)
  email: 'gulablodge.maihar@gmail.com',
  address: 'Railway Station Area, Patehra, Maihar, Satna District, MP 485771, India',
  coordinates: {
    lat: 24.1934,
    lng: 81.0047,
  },
};

// Nearby attractions with coordinates
export const nearbyAttractions = [
  {
    id: 'temple',
    name: 'Maa Sharda Temple',
    icon: '🏛️',
    description: 'Famous pilgrimage site',
    coordinates: {
      lat: 24.1945,
      lng: 81.0065,
    },
  },
  {
    id: 'station',
    name: 'Maihar Railway Station',
    icon: '🚂',
    description: '5 minutes away',
    coordinates: {
      lat: 24.1910,
      lng: 81.0030,
    },
  },
  {
    id: 'market',
    name: 'Local Market & Shopping',
    icon: '🛍️',
    description: 'Shopping & dining nearby',
    coordinates: {
      lat: 24.1920,
      lng: 81.0055,
    },
  },
];

// WhatsApp booking link generator
export const generateWhatsAppMessage = (roomName, checkIn, checkOut) => {
  const baseMessage = `Hi Gulab Lodge, I'm interested in booking${roomName ? ` the ${roomName}` : ' a room'}`;
  const details = checkIn && checkOut
    ? ` for ${checkIn} to ${checkOut}`
    : '';
  return encodeURIComponent(`${baseMessage}${details}`);
};

// Generate WhatsApp link
export const getWhatsAppLink = (message) => `https://wa.me/${contactInfo.whatsappNumber}?text=${message}`;

// Generate phone link
export const getPhoneLink = () => `tel:${contactInfo.phone}`;

// Generate email link
export const getEmailLink = (subject = '') => `mailto:${contactInfo.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;

// Calculate distance between two coordinates (Haversine formula)
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    + Math.cos((lat1 * Math.PI) / 180)
      * Math.cos((lat2 * Math.PI) / 180)
      * Math.sin(dLng / 2)
      * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
};

// Get Google Maps embed URL
export const getGoogleMapsEmbedUrl = (lat, lng) => `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5218!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${lat}%2C${lng}!5e0!3m2!1sen!2sin!4v1234567890`;

// Get Google Maps directions link
export const getDirectionsLink = (lat, lng) => `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
