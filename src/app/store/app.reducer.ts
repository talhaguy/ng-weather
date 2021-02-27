import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './AppState';
import { locationReducer } from './location/location.reducer';

export const reducers: ActionReducerMap<AppState> = {
  location: locationReducer,
};
