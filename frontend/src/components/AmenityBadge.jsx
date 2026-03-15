function AmenityBadge({ amenity }) {
  const getIcon = (iconName) => {
    const icons = {
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
    };
    return icons[iconName] || '✨';
  };

  return (
    <span className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
      <span className="mr-1">{getIcon(amenity.icon)}</span>
      {amenity.name}
    </span>
  );
}

export default AmenityBadge;
