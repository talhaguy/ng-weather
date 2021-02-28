# NgWeather

The purpose of this project is to gain familiarity with:

- [Angular](https://angular.io/)
- [NgRx Store and Effects](https://ngrx.io/)
- [PrimeNG](https://primefaces.org/primeng/showcase/#/)
- [Chart.js](https://www.chartjs.org/)
- [OpenWeather API](https://openweathermap.org/api)

## Setup

Before building the project, create a file with your API keys. Create this file as `src/environments/environment.secret.ts` and give it the following contents (replacing the keys with the correct values):

```typescript
export const environmentSecret = {
  weatherApiKey: "QWERTYUIOPASDFGHJKLZXCVBNM",
};
```

---

## Commands

- Dev server: `ng serve` then navigate to `http://localhost:4200/`
- Build: `ng build`
- Prod Build: `ng build:build`
