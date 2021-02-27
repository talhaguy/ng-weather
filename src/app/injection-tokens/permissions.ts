import { InjectionToken } from '@angular/core';

export const PermissionsToken = new InjectionToken<Permissions>('Permissions', {
  providedIn: 'root',
  factory: () => window.navigator.permissions,
});
