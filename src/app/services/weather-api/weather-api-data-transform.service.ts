import { Injectable } from '@angular/core';
import { WeatherDailyForecast } from 'src/app/store/weather/WeatherState';
import { UnitConversionService } from '../unit-conversion.service';
import { OneCallForecastDaily } from './OneCallForecastResponse';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiDataTransformService {
  constructor(private unitConversionService: UnitConversionService) {}

  convertOneCallDailyToDailyForecast(
    oneCallDailyForecastList: OneCallForecastDaily[]
  ) {
    return oneCallDailyForecastList.map<WeatherDailyForecast>(
      (oneCallDailyForecast) => {
        return {
          date: this.unitConversionService.convertUnixToJSTimestamp(
            oneCallDailyForecast.dt
          ),
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
