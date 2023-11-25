import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const WeatherService = {
  getCurrentWeatherByCity: async (city: string): Promise<any> => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching current weather by city:', error);
      throw error;
    }
  },

  getWeatherForecastByCity: async (city: string): Promise<any> => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          q: city,
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching weather forecast by city:', error);
      throw error;
    }
  },

  getCurrentWeatherByGeoLocation: async (latitude: number, longitude: number): Promise<any> => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching current weather by geo location:', error);
      throw error;
    }
  },

  getWeatherForecastByGeoLocation: async (latitude: number, longitude: number): Promise<any> => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          lat: latitude,
          lon: longitude,
          appid: API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching weather forecast by geo location:', error);
      throw error;
    }
  },
};

export default WeatherService;
