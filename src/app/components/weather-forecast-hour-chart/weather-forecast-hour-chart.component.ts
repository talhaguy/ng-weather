import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { UnitConversionPipe } from 'src/app/pipes/unit-conversion.pipe';
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

  constructor(
    private datePipe: DatePipe,
    private unitConversionPipe: UnitConversionPipe
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // TODO: do this work in a service and make sure it reruns on location updates
    if (this.chartCanvas) {
      const labels = this.hourlyForecastList.map((forecast) => {
        return this.datePipe.transform(
          this.unitConversionPipe.transform(
            forecast.date,
            'unix time',
            'js time'
          ),
          'h a'
        ) as string;
      });

      const temperatures = this.hourlyForecastList.map((forecast) => {
        return this.unitConversionPipe.transform(
          forecast.temperature,
          'kelvin',
          'farenheight'
        );
      });

      const chart = new Chart(this.chartCanvas.nativeElement, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Temperature',
              data: temperatures,
              fill: 'origin',
            },
          ],
        },
      });
    } else {
      console.log('nope...');
    }
  }
}
