import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './AppState';
import { locationReducer } from './location/location.reducer';
import { weatherReducer } from './weather/weather.reducer';

export const reducers: ActionReducerMap<AppState> = {
  location: locationReducer,
  weather: weatherReducer,
};
