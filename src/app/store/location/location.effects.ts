import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as locationActions from './location.actions';
import * as weatherActions from '../weather/weather.actions';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import {
  GeolocationPermissionStatus,
  GeoLocationService,
} from 'src/app/services/geolocation.service';
import { of } from 'rxjs';

@Injectable()
export class LocationEffects {
  checkPermissions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(locationActions.checkPermissions),
      exhaustMap((action) => {
        return this.geoLocationService.getGeolocationsPermissionStatus();
      }),
      switchMap((permissionStatus) => {
        if (permissionStatus === GeolocationPermissionStatus.Denied) {
          return [
            locationActions.denyPermission({
              message: 'You have previously denied location permissions',
            }),
          ];
        } else if (permissionStatus === GeolocationPermissionStatus.Prompt) {
          return [locationActions.showPermissionsConfirmation()];
        } else {
          return [
            locationActions.grantPermission(),
            locationActions.requestPermissionAndStartGettingLocation(),
          ];
        }
      })
    );
  });

  showPermissionsConfirmation$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(locationActions.showPermissionsConfirmation),
        tap((action) => {
          this.geoLocationService.showPermissionsConfirmation();
        })
      );
    },
    {
      dispatch: false,
    }
  );

  requestPermissionAndStartGettingLocation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(locationActions.requestPermissionAndStartGettingLocation),
      exhaustMap((action) => {
        return this.geoLocationService.getCurrentPosition();
      }),
      switchMap((position) => {
        return [
          locationActions.updateCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          weatherActions.getCurrentForecastByCoordinatesStart({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          weatherActions.getOneCallForecastStart({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        ];
      }),
      catchError((error) => {
        return of(
          locationActions.denyPermission({
            message: error.message,
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private geoLocationService: GeoLocationService
  ) {}
}
