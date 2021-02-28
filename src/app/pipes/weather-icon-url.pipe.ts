import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIconUrl',
})
export class WeatherIconUrlPipe implements PipeTransform {
  transform(iconCode: string) {
    return 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png';
  }
}
