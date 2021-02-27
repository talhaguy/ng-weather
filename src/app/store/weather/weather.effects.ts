import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { WeatherApiService } from 'src/app/services/weather-api/weather-api.service';
import { AppState } from '../AppState';
import * as weatherActions from './weather.actions';

@Injectable()
export class WeatherEffects {
  getCurrentForecastStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(weatherActions.getCurrentForecastStart),
      concatLatestFrom(() => this.store.select('location')),
      exhaustMap(([action, locationState]) => {
        if (!locationState.latitude || !locationState.longitude) {
          throw new Error('Coordinates not available');
        }

        return this.weatherApiService.getCurrentForecastByCoordinates(
          locationState.latitude,
          locationState.longitude
        );
      }),
      map((data) => {
        const desc = data.weather.length > 0 ? data.weather[0].main : '';

        return weatherActions.getCurrentForecastSuccess({
          locationName: data.name,
          currentTemperature: data.main.temp,
          date: data.dt,
          weatherDescription: desc,
          precipitationProbability: 0,
          humidityPercentage: data.main.humidity,
          windSpeed: data.wind.speed,
        });
      }),
      catchError((error) => {
        return of(
          weatherActions.getCurrentForecastError({
            error: error.message,
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherApiService: WeatherApiService
  ) {}
}
