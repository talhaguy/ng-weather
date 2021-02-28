export interface OneCallForecastResponse {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: OneCallForecastCurrent;
  minutely: OneCallForecastMinutely[];
  hourly: OneCallForecastHourly[];
  daily: OneCallForecastDaily[];
}

export interface OneCallForecastWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface OneCallForecastCurrent {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: OneCallForecastWeather[];
}

export interface OneCallForecastMinutely {
  dt: number;
  precipitation: number;
}

export interface OneCallForecastHourly {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: OneCallForecastWeather[];
  pop: number;
}

export interface OneCallForecastDaily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: OneCallForecastWeather[];
  clouds: number;
  pop: number;
  uvi: number;
}
