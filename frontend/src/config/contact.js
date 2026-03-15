// Gulab Lodge contact information
export const contactInfo = {
  phone: "+919999999999", // Placeholder - update with real number
  whatsappNumber: "919999999999", // WhatsApp format (country code without +)
  email: "info@gulablodge.com",
  address: "Railway Station Area, Patehra, Maihar, Satna District, MP 485771",
  coordinates: {
    lat: 24.1934,
    lng: 81.0047
  }
};

// WhatsApp booking link generator
export const generateWhatsAppMessage = (roomName, checkIn, checkOut) => {
  const baseMessage = `Hi Gulab Lodge, I'm interested in booking ${roomName}`;
  const details = checkIn && checkOut 
    ? ` for ${checkIn} to ${checkOut}`
    : "";
  return encodeURIComponent(`${baseMessage}${details}`);
};

// Generate WhatsApp link
export const getWhatsAppLink = (message) => {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${message}`;
};
