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
}

export interface WeatherDailyForecast {
  date: number;
  icon?: string;
  high: number;
  low: number;
}
