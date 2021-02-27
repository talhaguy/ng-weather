import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitConversionService {
  convertKelvinToFarenheight(kelvin: number) {
    return (kelvin - 273.15) * (9 / 5) + 32;
  }

  convertUnixToJSTimestamp(unixTime: number) {
    return unixTime * 1000;
  }

  convertMetersPerSecToMilesPerHour(metersPerSec: number) {
    return metersPerSec * 2.237;
  }
}
