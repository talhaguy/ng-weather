import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { UnitConversionPipe } from '../pipes/unit-conversion.pipe';
import { WeatherHourlyForecast } from '../store/weather/WeatherState';
import { Chart } from 'chart.js';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private chart?: Chart;

  constructor(
    private datePipe: DatePipe,
    private unitConversionPipe: UnitConversionPipe
  ) {}

  drawHourlyChart(
    chartCanvas: HTMLCanvasElement,
    hourlyForecastList: WeatherHourlyForecast[]
  ) {
    this.chart?.destroy();

    if (chartCanvas) {
      const labels: string[] = [];
      const temperatures: number[] = [];

      for (let i = 0; i < hourlyForecastList.length; i++) {
        labels.push(
          this.datePipe.transform(
            this.unitConversionPipe.transform(
              hourlyForecastList[i].date,
              'unix time',
              'js time'
            ),
            'h a'
          ) as string
        );

        temperatures.push(
          Math.round(
            this.unitConversionPipe.transform(
              hourlyForecastList[i].temperature,
              'kelvin',
              'farenheight'
            )
          )
        );
      }

      this.chart = new Chart(chartCanvas, {
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
    }
  }
}
