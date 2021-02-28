import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

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
import { ConfirmationService } from 'primeng/api';
import { reducers } from './store/app.reducer';
import { effects } from './store/app.effects';
import { WeatherApiKeyInterceptor } from './interceptors/weather-api-key.interceptor';
import { IsUndefinedPipe } from './pipes/is-undefined.pipe';

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
    IsUndefinedPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    ConfirmationService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: WeatherApiKeyInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
