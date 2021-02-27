import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationPermissionDialogComponent } from './components/location-permission-dialog/location-permission-dialog.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LocationPermissionStatusComponent } from './components/location-permission-status/location-permission-status.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { LocationEntryFormComponent } from './components/location-entry-form/location-entry-form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LocationPermissionDialogComponent,
    MainPageComponent,
    LocationPermissionStatusComponent,
    LocationDetailsComponent,
    CurrentWeatherComponent,
    WeatherForecastComponent,
    LocationEntryFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
