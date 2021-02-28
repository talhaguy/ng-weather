import { Injectable } from '@angular/core';
import {
  WeatherDailyForecast,
  WeatherHourlyForecast,
} from 'src/app/store/weather/WeatherState';
import {
  OneCallForecastDaily,
  OneCallForecastHourly,
} from './OneCallForecastResponse';

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

  convertOneCallHourlyToHourlyForecast(
    oneCallHourlyForecastList: OneCallForecastHourly[]
  ) {
    const list = [];
    for (let i = 0; i < oneCallHourlyForecastList.length && i < 25; i++) {
      list.push({
        date: oneCallHourlyForecastList[i].dt,
        temperature: oneCallHourlyForecastList[i].temp,
      });
    }
    return list;
  }
}
