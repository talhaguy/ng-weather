import { createReducer, on } from '@ngrx/store';
import { LocationState } from './LocationState';
import * as locationActions from './location.actions';

const initialState: LocationState = {
  isLocationPermissionGranted: false,
  loading: false,
};

export const locationReducer = createReducer(
  initialState,

  on(locationActions.grantPermission, (state) => {
    return {
      ...state,
      isLocationPermissionGranted: true,
    };
  }),

  on(locationActions.denyPermission, (state) => {
    return {
      ...state,
      isLocationPermissionGranted: false,
    };
  }),

  on(locationActions.requestPermissionAndStartGettingLocation, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(locationActions.updateCoordinates, (state, action) => {
    return {
      ...state,
      loading: false,
      latitude: action.latitude,
      longitude: action.longitude,
    };
  })
);
