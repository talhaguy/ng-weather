import { Injectable } from '@angular/core';
import { WeatherDailyForecast } from 'src/app/store/weather/WeatherState';
import { OneCallForecastDaily } from './OneCallForecastResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiDataTransformService {
  constructor() {}

  convertOneCallDailyToDailyForecast(
    oneCallDailyForecastList: OneCallForecastDaily[]
  ) {
    return oneCallDailyForecastList.map<WeatherDailyForecast>(
      (oneCallDailyForecast) => {
        return {
          date: oneCallDailyForecast.dt,
          icon:
            oneCallDailyForecast.weather.length > 0
              ? oneCallDailyForecast.weather[0].icon
              : undefined,
          high: oneCallDailyForecast.temp.max,
          low: oneCallDailyForecast.temp.min,
        };
      }
    );
  }
}
