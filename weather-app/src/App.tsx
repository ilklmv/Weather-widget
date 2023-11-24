import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import LocationButton from './components/LocationButton';
import WeatherButton from './components/WeatherButton';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [geoLocation, setGeoLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const handleSearch = (city: string) => {
    setSelectedCity(city);
    setGeoLocation(null);
  };

  const handleGetLocation = (latitude: number, longitude: number) => {
    setSelectedCity(null);
    setGeoLocation({ latitude, longitude });
  };

  const handleGetWeather = () => {
    if (selectedCity || geoLocation) {
      console.log('Getting weather...');
    } else {
      console.log('Please enter a city or allow location access.');
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput onSearch={handleSearch} />
      <LocationButton onGetLocation={handleGetLocation} />
      <WeatherButton onGetWeather={handleGetWeather} isGetLocation={!!geoLocation} />
    </div>
  );
};

export default App;
