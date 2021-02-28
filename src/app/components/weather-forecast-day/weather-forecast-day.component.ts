import { Component, Input, OnInit } from '@angular/core';
import { WeatherDailyForecast } from 'src/app/store/weather/WeatherState';

@Component({
  selector: 'app-weather-forecast-day',
  templateUrl: './weather-forecast-day.component.html',
  styleUrls: ['./weather-forecast-day.component.scss'],
})
export class WeatherForecastDayComponent implements OnInit {
  @Input() weatherForDay: WeatherDailyForecast = {
    date: 0,
    high: 0,
    low: 0,
  };

  constructor() {}

  ngOnInit(): void {}
}
