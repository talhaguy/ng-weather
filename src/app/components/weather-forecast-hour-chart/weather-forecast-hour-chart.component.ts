import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
import { WeatherHourlyForecast } from 'src/app/store/weather/WeatherState';

@Component({
  selector: 'app-weather-forecast-hour-chart',
  templateUrl: './weather-forecast-hour-chart.component.html',
  styleUrls: ['./weather-forecast-hour-chart.component.scss'],
})
export class WeatherForecastHourChartComponent
  implements OnInit, AfterViewInit {
  @Input() hourlyForecastList: WeatherHourlyForecast[] = [];
  @ViewChild('chart') chartCanvas?: ElementRef<HTMLCanvasElement>;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (this.chartCanvas) {
      this.chartService.drawHourlyChart(
        this.chartCanvas.nativeElement,
        this.hourlyForecastList
      );
    }
  }
}
