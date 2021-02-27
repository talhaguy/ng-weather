import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Environment,
  EnvironmenToken,
} from '../injection-tokens/environment.injection-token';

@Injectable()
export class WeatherApiKeyInterceptor implements HttpInterceptor {
  constructor(@Inject(EnvironmenToken) private environment: Environment) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      setParams: {
        appid: this.environment.weatherApiKey,
      },
    });

    return next.handle(cloned);
  }
}
