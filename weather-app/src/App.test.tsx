import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../src/App'

jest.mock('../services/WeatherSrevice', () => ({
  getCurrentWeatherByCity: jest.fn(() => Promise.resolve ({})),
  getWeatherForecastByCity: jest.fn(() => Promise.resolve ({})),
  getCurrentWeatherByGeolocation: jest.fn(() => Promise.resolve ({})),
  getWeatherForecastByGeoLocation: jest.fn(() => Promise.resolve ({})),
}));

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Weather App')).toBeInTheDocument();
  });

  it('performs city search and gets weather', async () => {
    render(<App />);

    const searchInput = screen.getByLabelText('Enter City:');
    const searchButton = screen.getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'London' } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(screen.getByText('Temperature')).toBeInTheDocument();
    });
  });
});