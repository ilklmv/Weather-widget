// src/App.tsx
import React, { useState } from 'react';
import SearchInput from './components/SearchInput';
import LocationButton from './components/LocationButton';
import WeatherButton from './components/WeatherButton';
import WeatherInfo from './components/WeatherInfo';
import ForecastToggle from './components/ForecastToggle';
import LocationService from './services/LocationService'; 
import WeatherService from './services/WeatherService';

const App: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [geoLocation, setGeoLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [isCurrentForecast, setIsCurrentForecast] = useState<boolean>(true);

  const handleSearch = (city: string) => {
    setSelectedCity(city);
    setGeoLocation(null);
    setWeatherData(null);
  };

  const handleGetLocation = async () => {
    try {
      const location = await LocationService.getCurrentLocation();
      setSelectedCity(null);
      setGeoLocation(location);
      setWeatherData(null);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const handleGetWeather = async () => {
    try {
      let response;

      if (geoLocation) {
        if (isCurrentForecast) {
          response = await WeatherService.getCurrentWeatherByGeoLocation(
            geoLocation.latitude,
            geoLocation.longitude
          );
        } else {
          response = await WeatherService.getWeatherForecastByGeoLocation(
            geoLocation.latitude,
            geoLocation.longitude
          );
        }
      } else if (selectedCity) {
        if (isCurrentForecast) {
          response = await WeatherService.getCurrentWeatherByCity(selectedCity);
        } else {
          response = await WeatherService.getWeatherForecastByCity(selectedCity);
        }
      }

      setWeatherData(response);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  const handleSelectForecast = (isCurrent: boolean) => {
    setIsCurrentForecast(isCurrent);
  };

  return (
    <div>
      <h1>Weather App</h1>
      <SearchInput onSearch={handleSearch} />
      <LocationButton onGetLocation={handleGetLocation} />
      <ForecastToggle onSelectForecast={handleSelectForecast} />
      <WeatherButton onGetWeather={handleGetWeather} isGeoLocation={!!geoLocation} />

      <WeatherInfo weatherData={weatherData} isCurrentForecast={false} />
    </div>
  );
};

export default App;
