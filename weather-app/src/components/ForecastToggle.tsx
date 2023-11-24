import React from "react";

interface ForecastToogleProps {
    onSelectForecast: (isCurrent: boolean) => void;
}

const ForecastToggle: React.FC<ForecastToogleProps> = ({ onSelectForecast }) => {
    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="forecastToggle"
                    value="current"
                    onChange={() => onSelectForecast(true)} 
                    />
                    Current Weather
            </label>
            <label>
                <input
                    type="radio"
                    name="forecastToggle"
                    value="5days"
                    onChange={() => onSelectForecast(false)}
                />
                5-Day Forecast
            </label>
        </div>
    );
}; 

export default ForecastToggle;