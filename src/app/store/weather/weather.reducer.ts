import { createReducer, on } from '@ngrx/store';
import { WeatherState } from './WeatherState';
import * as weatherActions from './weather.actions';

const initialState: WeatherState = {
  loading: false,
};

export const weatherReducer = createReducer(
  initialState,

  on(weatherActions.getCurrentForecastStart, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(weatherActions.getCurrentForecastError, (state, action) => {
    return {
      ...state,
      loading: false,
    };
  }),

  on(weatherActions.getCurrentForecastSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      locationName: action.locationName,
      currentTemperature: action.currentTemperature,
      date: action.date,
      weatherDescription: action.weatherDescription,
      precipitationProbability: action.precipitationProbability,
      humidityPercentage: action.humidityPercentage,
      windSpeed: action.windSpeed,
    };
  })
);
