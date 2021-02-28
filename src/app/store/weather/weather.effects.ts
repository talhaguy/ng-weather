import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { WeatherApiDataTransformService } from 'src/app/services/weather-api/weather-api-data-transform.service';
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
        const icon = data.weather.length > 0 ? data.weather[0].icon : undefined;

        return weatherActions.getCurrentForecastSuccess({
          locationName: data.name,
          currentTemperature: data.main.temp,
          date: data.dt,
          currentWeatherDescription: desc,
          currentHumidityPercentage: data.main.humidity,
          currentWindSpeed: data.wind.speed,
          currentWeatherIcon: icon,
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

  getOneCallForecastStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(weatherActions.getOneCallForecastStart),
      concatLatestFrom(() => this.store.select('location')),
      exhaustMap(([action, locationState]) => {
        if (!locationState.latitude || !locationState.longitude) {
          throw new Error('Coordinates not available');
        }

        return this.weatherApiService.getForecastByCoordinates(
          locationState.latitude,
          locationState.longitude
        );
      }),
      map((data) => {
        const precipitation = data.hourly.length > 0 ? data.hourly[0].pop : 0;

        return weatherActions.getOneCallForecastSuccess({
          currentPrecipitationProbability: precipitation,
          weatherDailyForecastList: this.weatherApiDataTransformService.convertOneCallDailyToDailyForecast(
            data.daily
          ),
        });
      }),
      catchError((error) => {
        return of(
          weatherActions.getOneCallForecastError({
            error: error.message,
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private weatherApiService: WeatherApiService,
    private weatherApiDataTransformService: WeatherApiDataTransformService
  ) {}
}
