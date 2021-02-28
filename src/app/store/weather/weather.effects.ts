import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap, tap } from 'rxjs/operators';
import { CurrentForecaseResponse } from 'src/app/services/weather-api/CurrentForecastResponse';
import { WeatherApiDataTransformService } from 'src/app/services/weather-api/weather-api-data-transform.service';
import { WeatherApiService } from 'src/app/services/weather-api/weather-api.service';
import * as weatherActions from './weather.actions';

@Injectable()
export class WeatherEffects {
  getCurrentForecastStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(weatherActions.getCurrentForecastByCoordinatesStart),
      exhaustMap((action) => {
        return this.weatherApiService
          .getCurrentForecastByCoordinates(action.latitude, action.longitude)
          .pipe(
            map((data) => {
              const successPayload = this.createCurrentForecastSuccessActionPayload(
                data
              );
              return weatherActions.getCurrentForecastSuccess(successPayload);
            }),
            catchError((error) => {
              return of(
                weatherActions.getCurrentForecastError({
                  error: error.message,
                })
              );
            })
          );
      })
    );
  });

  getCurrentForecastByZipCodeStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(weatherActions.getCurrentForecastByZipCodeStart),
      exhaustMap((action) => {
        return this.weatherApiService
          .getCurrentForecastByZipCode(action.zipCode)
          .pipe(
            switchMap((data) => {
              const successPayload = this.createCurrentForecastSuccessActionPayload(
                data
              );

              return [
                weatherActions.getCurrentForecastSuccess(successPayload),
                weatherActions.getOneCallForecastStart({
                  latitude: data.coord.lat,
                  longitude: data.coord.lon,
                }),
              ];
            }),
            catchError((error) => {
              return of(
                weatherActions.getCurrentForecastError({
                  error: error.message,
                })
              );
            })
          );
      })
    );
  });

  getOneCallForecastStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(weatherActions.getOneCallForecastStart),
      exhaustMap((action) => {
        return this.weatherApiService
          .getForecastByCoordinates(action.latitude, action.longitude)
          .pipe(
            map((data) => {
              const precipitation =
                data.hourly.length > 0 ? data.hourly[0].pop : 0;

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
      })
    );
  });

  constructor(
    private actions$: Actions,
    private weatherApiService: WeatherApiService,
    private weatherApiDataTransformService: WeatherApiDataTransformService
  ) {}

  private createCurrentForecastSuccessActionPayload(
    data: CurrentForecaseResponse
  ): weatherActions.CurrentForecastSuccessPayload {
    const desc = data.weather.length > 0 ? data.weather[0].main : '';
    const icon = data.weather.length > 0 ? data.weather[0].icon : undefined;

    return {
      locationName: data.name,
      currentTemperature: data.main.temp,
      date: data.dt,
      currentWeatherDescription: desc,
      currentHumidityPercentage: data.main.humidity,
      currentWindSpeed: data.wind.speed,
      currentWeatherIcon: icon,
    };
  }
}
