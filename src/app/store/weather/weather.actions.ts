import { createAction, props } from '@ngrx/store';
import { WeatherDailyForecast } from './WeatherState';

export const getCurrentForecastStart = createAction(
  '[Weather] Get Current Forecast Start'
);

export const getCurrentForecastError = createAction(
  '[Weather] Get Current Forecast Error',
  props<{ error: string }>()
);

export const getCurrentForecastSuccess = createAction(
  '[Weather] Get Current Forecast Success',
  props<CurrentForecastSuccessPayload>()
);

export interface CurrentForecastSuccessPayload {
  locationName: string;
  date: number;
  currentWeatherDescription: string;
  currentTemperature: number;
  currentHumidityPercentage: number;
  currentWindSpeed: number;
  currentWeatherIcon?: string;
}

export const getOneCallForecastStart = createAction(
  '[Weather] Get One Call Forecast Start'
);

export const getOneCallForecastError = createAction(
  '[Weather] Get One Call Forecast Error',
  props<{ error: string }>()
);

export const getOneCallForecastSuccess = createAction(
  '[Weather] Get One Call Forecast Success',
  props<OneCallForecastSuccessPayload>()
);

export interface OneCallForecastSuccessPayload {
  currentPrecipitationProbability: number;
  weatherDailyForecastList: WeatherDailyForecast[];
}
