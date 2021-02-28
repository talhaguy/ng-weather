import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() temperature?: number;
  @Input() precipitationProbability?: number;
  @Input() humidityPercentage?: number;
  @Input() windSpeed?: number;
  @Input() icon?: string;

  constructor() {}

  ngOnInit(): void {}
}
