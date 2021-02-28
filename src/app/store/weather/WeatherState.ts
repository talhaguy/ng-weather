export interface WeatherState {
  loading: boolean;
  loadingCurrent: boolean;
  loadingOneCall: boolean;
  locationName?: string;
  date?: number;
  currentWeatherDescription?: string;
  currentTemperature?: number;
  currentPrecipitationProbability?: number;
  currentHumidityPercentage?: number;
  currentWindSpeed?: number;
  currentWeatherIcon?: string;
  dailyForecast?: WeatherDailyForecast[];
  hourlyForecast?: WeatherHourlyForecast[];
}

export interface WeatherDailyForecast {
  date: number;
  icon?: string;
  high: number;
  low: number;
}

export interface WeatherHourlyForecast {
  date: number;
  temperature: number;
}
