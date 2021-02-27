import { createAction, props } from '@ngrx/store';

export const getCurrentForecastStart = createAction(
  '[Weather] Get Current Forecast Start'
);

export const getCurrentForecastError = createAction(
  '[Weather] Get Current Forecast Error',
  props<{ error: string }>()
);

export const getCurrentForecastSuccess = createAction(
  '[Weather] Get Current Forecast Success',
  props<{
    locationName: string;
    weatherDescription: string;
    date: number;
    currentTemperature: number;
    precipitationProbability: number;
    humidityPercentage: number;
    windSpeed: number;
  }>()
);
