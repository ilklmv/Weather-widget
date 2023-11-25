import { useState } from 'react';
import WeatherService from '../services/WeatherService';

interface UseWeatherResult {
  weatherData: any;
  getWeather: (city: string) => Promise<void>;
  getForecast: (city: string) => Promise<void>;
}

const useWeather = (): UseWeatherResult => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const getWeather = async (city: string) => {
    try {
      const response = await WeatherService.getCurrentWeatherByCity(city);
      setWeatherData(response);
    } catch (error) {
      console.error('Error fetching current weather:', error);
      throw error;
    }
  };

  const getForecast = async (city: string) => {
    try {
      const response = await WeatherService.getWeatherForecastByCity(city);
      setWeatherData(response);
    } catch (error) {
      console.error('Error fetching weather forecast:', error);
      throw error;
    }
  };

  return {
    weatherData,
    getWeather,
    getForecast,
  };
};

export default useWeather;
