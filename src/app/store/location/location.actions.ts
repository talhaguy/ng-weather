import { createAction, props } from '@ngrx/store';

export const checkPermissions = createAction('[Location] Check Permissions');

export const showPermissionsConfirmation = createAction(
  '[Location] Show Permissions Confirmation'
);

export const requestPermissionAndStartGettingLocation = createAction(
  '[Location] Request Permission and Start Getting Location'
);

export const grantPermission = createAction('[Location] Grant Permission');

export const updateCoordinates = createAction(
  '[Location] Update Coordinates',
  props<{ latitude: number; longitude: number }>()
);

export const denyPermission = createAction(
  '[Location] Deny Permission',
  props<{ message: string }>()
);
