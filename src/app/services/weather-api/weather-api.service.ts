import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UnitConversionService } from '../unit-conversion.service';
import { CurrentForecaseResponse } from './CurrentForecastResponse';
import { WeatherApiUrls } from './WeatherApiUrls';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(
    private http: HttpClient,
    private unitConversionService: UnitConversionService
  ) {}

  getCurrentForecastByCoordinates(latitude: number, longitude: number) {
    return this.formatCurrentForecastResponse(
      this.http.get<CurrentForecaseResponse>(WeatherApiUrls.Current, {
        params: {
          lat: latitude + '',
          lon: longitude + '',
        },
      })
    );
  }

  getCurrentForecastByZipCode(zipCode: string) {
    return this.formatCurrentForecastResponse(
      this.http.get<CurrentForecaseResponse>(WeatherApiUrls.Current, {
        params: {
          zip: zipCode,
        },
      })
    );
  }

  private formatCurrentForecastResponse(
    obs$: Observable<CurrentForecaseResponse>
  ) {
    return obs$.pipe(
      map((res) => {
        res.main.temp = this.unitConversionService.convertKelvinToFarenheight(
          res.main.temp
        );
        res.dt = this.unitConversionService.convertUnixToJSTimestamp(res.dt);
        res.wind.speed = this.unitConversionService.convertMetersPerSecToMilesPerHour(
          res.wind.speed
        );
        return res;
      })
    );
  }
}
