// src/App.tsx
import React from 'react';
import SearchInput from './components/SearchInput';
import LocationButton from './components/LocationButton';

const App: React.FC = () => {
  const handleSearch = (city: string) => {
    // Ваша логика для обработки поиска, например, вызов WeatherService
    console.log(`Searching for weather in ${city}`);
  };

  const handleGetLocation = (latitude: number, longitude: number) => {
    // Ваша логика для обработки полученной локации, например, вызов WeatherService
    console.log(`Received location: ${latitude}, ${longitude}`);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput onSearch={handleSearch} />
      <LocationButton onGetLocation={handleGetLocation} />
      {/* Добавьте другие компоненты по мере необходимости */}
    </div>
  );
};

export default App;
