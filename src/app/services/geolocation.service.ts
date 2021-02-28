import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeoLocationToken } from '../injection-tokens/geolocation';
import { PermissionsToken } from '../injection-tokens/permissions';

@Injectable({ providedIn: 'root' })
export class GeoLocationService {
  constructor(
    @Inject(GeoLocationToken) private geoLocation: Geolocation,
    @Inject(PermissionsToken) private permissions: Permissions,
    @Inject(DOCUMENT) private document: Document,
    private confirmationService: ConfirmationService
  ) {}

  /*
   * Requests for permission for location if not requested and gets location.
   * The navigator.geolocation.getCurrentPosition API does both in one shot.
   */
  getCurrentPosition() {
    return new Observable<GeolocationPosition>((subscriber) => {
      let tid: number;
      const window = this.document.defaultView;

      this.geoLocation.getCurrentPosition(
        (position) => {
          window?.clearTimeout(tid);
          subscriber.next(position);
          subscriber.complete();
        },
        (error) => {
          subscriber.error(error);
        }
      );

      if (window) {
        tid = window.setTimeout(() => {
          subscriber.error(
            new Error(
              'Getting location is taking longer than expected. Please ensure your system level permissions are set to allow location permissions to your web browser.'
            )
          );
        }, 7000);
      }
    });
  }

  getGeolocationsPermissionStatus() {
    return from(this.permissions.query({ name: 'geolocation' })).pipe(
      map((permissionStatus) => {
        switch (permissionStatus.state) {
          case 'denied':
            return GeolocationPermissionStatus.Denied;
          case 'granted':
            return GeolocationPermissionStatus.Granted;
          case 'prompt':
            return GeolocationPermissionStatus.Prompt;
        }
      })
    );
  }

  showPermissionsConfirmation() {
    this.confirmationService.confirm({
      message:
        'To have the most seamless and accurate experience, we will request your location. Fear not though - If you choose not to provide permission, you may still use manual zip code entry to get your forecast.',
      acceptLabel: 'Continue to Request for Location Permission',
      rejectVisible: false,
      icon: 'pi pi-compass',
      header: 'Location Permission Request',
    });
  }
}

export enum GeolocationPermissionStatus {
  Denied,
  Granted,
  Prompt,
}
