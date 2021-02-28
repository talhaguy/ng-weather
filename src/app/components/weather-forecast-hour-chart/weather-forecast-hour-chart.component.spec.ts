import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastHourChartComponent } from './weather-forecast-hour-chart.component';

describe('WeatherForecastHourChartComponent', () => {
  let component: WeatherForecastHourChartComponent;
  let fixture: ComponentFixture<WeatherForecastHourChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastHourChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastHourChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
