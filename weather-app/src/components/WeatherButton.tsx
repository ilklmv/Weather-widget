import React from 'react';
import useWeather from '../hooks/useWeather';
import './WeatherButton.css';

interface WeatherButtonProps {
  onGetWeather: () => void;
  isGeoLocation: boolean;
}

const WeatherButton: React.FC<WeatherButtonProps> = ({ onGetWeather, isGeoLocation }) => {
  const { getWeather } = useWeather();

  const handleClick = async () => {
    if (isGeoLocation) {
      await getWeather('');
    } else {
      onGetWeather();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get Weather</button>
    </div>
  );
};

export default WeatherButton;
