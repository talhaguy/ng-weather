import { environmentSecret } from './environment.secret';

export const environment = {
  production: true,
  weatherApiKey: environmentSecret.weatherApiKey,
};
