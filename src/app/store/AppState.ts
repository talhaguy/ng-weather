import { LocationState } from './location/LocationState';
import { WeatherState } from './weather/WeatherState';

export interface AppState {
  location: LocationState;
  weather: WeatherState;
}
