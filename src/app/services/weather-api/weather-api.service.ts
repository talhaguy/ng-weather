import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurrentForecaseResponse } from './CurrentForecastResponse';
import { OneCallForecastResponse } from './OneCallForecastResponse';
import { WeatherApiUrls } from './WeatherApiUrls';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  constructor(private http: HttpClient) {}

  getCurrentForecastByCoordinates(latitude: number, longitude: number) {
    return this.http.get<CurrentForecaseResponse>(WeatherApiUrls.Current, {
      params: {
        lat: latitude + '',
        lon: longitude + '',
      },
    });
  }

  getCurrentForecastByZipCode(zipCode: string) {
    return this.http.get<CurrentForecaseResponse>(WeatherApiUrls.Current, {
      params: {
        zip: zipCode,
      },
    });
  }

  getForecastByCoordinates(latitude: number, longitude: number) {
    return this.http.get<OneCallForecastResponse>(WeatherApiUrls.OneCall, {
      params: {
        lat: latitude + '',
        lon: longitude + '',
      },
    });
  }

  getForecastByZipCode(zipCode: string) {
    return this.http.get<OneCallForecastResponse>(WeatherApiUrls.OneCall, {
      params: {
        zip: zipCode,
      },
    });
  }
}
