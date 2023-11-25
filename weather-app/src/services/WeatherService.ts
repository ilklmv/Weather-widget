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
      console.error('Ошибка получения текущей погоды по городу:', error);
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
      console.error('Ошибка получения текущей погоды по городу:', error);
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
      console.error('Ошибка получения текущей погоды по местоположению:', error);
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
      console.error('Ошибка получения текущей погоды по местоположению:', error);
      throw error;
    }
  },
};

export default WeatherService;
