import { Component, Input, OnInit } from '@angular/core';
import { WeatherDailyForecast } from 'src/app/store/weather/WeatherState';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
})
export class WeatherForecastComponent implements OnInit {
  @Input() weatherForDayList?: WeatherDailyForecast[];

  constructor() {}

  ngOnInit(): void {}
}
