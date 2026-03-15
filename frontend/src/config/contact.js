// Gulab Lodge contact information
export const contactInfo = {
  phone: "+918109880019", // Real contact number for Gulab Lodge
  whatsappNumber: "918109880019", // WhatsApp format (country code without +)
  email: "gulablodge.maihar@gmail.com",
  address: "Railway Station Area, Patehra, Maihar, Satna District, MP 485771, India",
  coordinates: {
    lat: 24.1934,
    lng: 81.0047
  }
};

// WhatsApp booking link generator
export const generateWhatsAppMessage = (roomName, checkIn, checkOut) => {
  const baseMessage = `Hi Gulab Lodge, I'm interested in booking${roomName ? ` the ${roomName}` : ' a room'}`;
  const details = checkIn && checkOut 
    ? ` for ${checkIn} to ${checkOut}`
    : "";
  return encodeURIComponent(`${baseMessage}${details}`);
};

// Generate WhatsApp link
export const getWhatsAppLink = (message) => {
  return `https://wa.me/${contactInfo.whatsappNumber}?text=${message}`;
};

// Generate phone link
export const getPhoneLink = () => {
  return `tel:${contactInfo.phone}`;
};

// Generate email link
export const getEmailLink = (subject = "") => {
  return `mailto:${contactInfo.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
};
