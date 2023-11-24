import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const WeatherService = { 
    getWeatherByCity: async (city: string): Promise<any> => {
        try { 
            const responce = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    q: city,
                    appid: API_KEY,
                },
            });

            return responce.data    
        } catch (error) {
            console.error('Error fetching weather by city:', error);
            throw error;
        }
    },

    getWeatherByGeoLocation: async (latitude: number, longitude: number): Promise<any> => {
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
            console.error('Error fetching weather by geo location:', error);
            throw error;
        }    
    },
};

export default WeatherService;