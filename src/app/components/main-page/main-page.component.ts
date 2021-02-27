import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/AppState';
import { LocationState } from 'src/app/store/location/LocationState';
import { WeatherState } from 'src/app/store/weather/WeatherState';

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
}
