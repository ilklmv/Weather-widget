import React, { useState } from 'react';

interface LocationButtonProps {
  onGetLocation: (latitude: number, longitude: number) => void;
}

const LocationButton: React.FC<LocationButtonProps> = ({ onGetLocation }) => {
  const [error, setError] = useState<string | null>(null);

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onGetLocation(latitude, longitude);
        setError(null);
      },
      (error) => {
        setError('Не удалось получить ваше местоположение. Введите вручную.');
      }
    );
  };

  return (
    <div>
      <button onClick={handleGetLocation}>Get Current Location</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default LocationButton;
