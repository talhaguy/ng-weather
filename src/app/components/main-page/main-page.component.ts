import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/AppState';
import { LocationState } from 'src/app/store/location/LocationState';
import { WeatherState } from 'src/app/store/weather/WeatherState';
import * as weatherActions from '../../store/weather/weather.actions';
import * as locationActions from '../../store/location/location.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  locationState$: Observable<LocationState>;
  weatherState$: Observable<WeatherState>;

  constructor(private store: Store<AppState>) {
    this.locationState$ = store.select('location');
    this.weatherState$ = store.select('weather');
  }

  ngOnInit(): void {}

  onZipCodeForSubmit(zipCode: string) {
    this.store.dispatch(
      weatherActions.getCurrentForecastByZipCodeStart({
        zipCode,
      })
    );
  }

  onRefreshLocation() {
    this.store.dispatch(
      locationActions.requestPermissionAndStartGettingLocation()
    );
  }
}
