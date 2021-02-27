import { InjectionToken } from '@angular/core';

export const GeoLocationToken = new InjectionToken<Geolocation>('GeoLocation', {
  providedIn: 'root',
  factory: () => window.navigator.geolocation,
});
