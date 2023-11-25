import React from "react";
import './WeatherInfo.css';

interface WeatherInfoProps {
    weatherData: any;
    isCurrentForecast: boolean;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData }) => { 
    if (!weatherData) { 
        return <p>No weather data available</p>;
    }

    const { 
        main: { temp },
        weather: [{ description, icon}],
        main: { pressure, humidity },
        wind: { speed },
        sys: { sunrise, sunset },  
    } = weatherData;

    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    const formatTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div>
            <h2>Информация о погоде</h2>
            <p>Температура: {temp} °C</p>
            <p>Описание погоды: {description}</p>
            <img src={iconUrl} alt="Weather Icon" />
            <p>Давление: {pressure} hPa</p>
            <p>Влажность: {humidity}%</p>
            <p>Скорость ветра: {speed}</p>
            <p>Время восхода: {formatTime(sunrise)}</p>
            <p>Время заката: {formatTime(sunset)}</p>
        </div>
    );
};

export default WeatherInfo;