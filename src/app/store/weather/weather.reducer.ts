import { createReducer, on } from '@ngrx/store';
import { WeatherState } from './WeatherState';
import * as weatherActions from './weather.actions';

const initialState: WeatherState = {
  loading: false,
  loadingCurrent: false,
  loadingOneCall: false,
};

export const weatherReducer = createReducer(
  initialState,

  on(weatherActions.getCurrentForecastStart, (state) => {
    return {
      ...state,
      loadingCurrent: true,
      loading: !state.loadingCurrent || state.loadingOneCall,
    };
  }),

  on(weatherActions.getCurrentForecastError, (state, action) => {
    return {
      ...state,
      loadingCurrent: false,
      loading: !state.loadingCurrent || state.loadingOneCall,
    };
  }),

  on(weatherActions.getCurrentForecastSuccess, (state, action) => {
    return {
      ...state,
      loadingCurrent: false,
      loading: !state.loadingCurrent || state.loadingOneCall,
      locationName: action.locationName,
      date: action.date,
      currentTemperature: action.currentTemperature,
      currentWeatherDescription: action.currentWeatherDescription,
      currentHumidityPercentage: action.currentHumidityPercentage,
      currentWindSpeed: action.currentWindSpeed,
    };
  }),

  on(weatherActions.getOneCallForecastStart, (state) => {
    return {
      ...state,
      loadingOneCall: true,
      loading: state.loadingCurrent || !state.loadingOneCall,
    };
  }),

  on(weatherActions.getOneCallForecastError, (state, action) => {
    return {
      ...state,
      loadingOneCall: false,
      loading: state.loadingCurrent || !state.loadingOneCall,
    };
  }),

  on(weatherActions.getOneCallForecastSuccess, (state, action) => {
    return {
      ...state,
      loadingOneCall: false,
      loading: state.loadingCurrent || !state.loadingOneCall,
      currentPrecipitationProbability: action.currentPrecipitationProbability,
    };
  })
);
