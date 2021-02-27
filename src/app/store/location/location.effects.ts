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
      map((permissionStatus) => {
        if (permissionStatus === GeolocationPermissionStatus.Denied) {
          return locationActions.denyPermission({
            message: 'You have previously denied location permissions',
          });
        } else if (permissionStatus === GeolocationPermissionStatus.Prompt) {
          return locationActions.showPermissionsConfirmation();
        } else {
          return locationActions.requestPermissionAndStartGettingLocation();
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
          locationActions.grantPermission(),
          locationActions.updateCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
          weatherActions.getCurrentForecastStart(),
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
