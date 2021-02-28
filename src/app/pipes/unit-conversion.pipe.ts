import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unitConversion',
})
export class UnitConversionPipe implements PipeTransform {
  transform(value: number, fromUnit: Unit, toUnit: Unit) {
    if (fromUnit === 'kelvin' && toUnit === 'farenheight') {
      return (value - 273.15) * (9 / 5) + 32;
    } else if (
      fromUnit === 'meters per second' &&
      toUnit === 'miles per hour'
    ) {
      return value * 2.237;
    } else if (fromUnit === 'unix time' && toUnit === 'js time') {
      return value * 1000;
    } else {
      return 0;
    }
  }
}

type Unit =
  | 'kelvin'
  | 'farenheight'
  | 'meters per second'
  | 'miles per hour'
  | 'unix time'
  | 'js time';
