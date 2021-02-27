import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPermissionDialogComponent } from './components/location-permission-dialog/location-permission-dialog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LocationPermissionStatusComponent } from './components/location-permission-status/location-permission-status.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { LocationEntryFormComponent } from './components/location-entry-form/location-entry-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPermissionDialogComponent,
    MainPageComponent,
    LocationPermissionStatusComponent,
    LocationDetailsComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
    LocationEntryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
