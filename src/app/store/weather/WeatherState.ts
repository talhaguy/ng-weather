export interface WeatherState {
  loading: boolean;
  locationName?: string;
  weatherDescription?: string;
  date?: number;
  currentTemperature?: number;
  precipitationProbability?: number;
  humidityPercentage?: number;
  windSpeed?: number;
}
