import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() temperature = 0;
  @Input() precipitationProbability = 0;
  @Input() humidityPercentage = 0;
  @Input() windSpeed = 0;

  constructor() {}

  ngOnInit(): void {}
}
