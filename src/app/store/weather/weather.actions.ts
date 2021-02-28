import { createAction, props } from '@ngrx/store';
import { WeatherDailyForecast } from './WeatherState';

// MARK: Current, Get by Coordinates

export const getCurrentForecastByCoordinatesStart = createAction(
  '[Weather] Get Current Forecast by Coordinate Start',
  props<{ latitude: number; longitude: number }>()
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

// MARK: Current, Get by Zip Code

export const getCurrentForecastByZipCodeStart = createAction(
  '[Weather] Get Current Forecast by Zip Code Start',
  props<{ zipCode: string }>()
);

// MARK: Current, Get Error and Success (shared by Coordinates and Zip Code)

export const getCurrentForecastError = createAction(
  '[Weather] Get Current Forecast Error',
  props<{ error: string }>()
);

export const getCurrentForecastSuccess = createAction(
  '[Weather] Get Current Forecast Success',
  props<CurrentForecastSuccessPayload>()
);

// MARK: One Call, Get by Coordinates

export const getOneCallForecastStart = createAction(
  '[Weather] Get One Call Forecast Start',
  props<{ latitude: number; longitude: number }>()
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
