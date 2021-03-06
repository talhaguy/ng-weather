import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfirmEventType } from 'primeng/api';
import { AppState } from 'src/app/store/AppState';
import * as locationActions from '../../store/location/location.actions';

@Component({
  selector: 'app-location-permission-dialog',
  templateUrl: './location-permission-dialog.component.html',
  styleUrls: ['./location-permission-dialog.component.scss'],
})
export class LocationPermissionDialogComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(locationActions.checkPermissions());
  }

  handleHide(type: ConfirmEventType) {
    switch (type) {
      case ConfirmEventType.ACCEPT:
        this.store.dispatch(
          locationActions.requestPermissionAndStartGettingLocation()
        );
        break;
      case ConfirmEventType.REJECT:
      case ConfirmEventType.CANCEL:
      default:
        this.store.dispatch(
          locationActions.denyPermission({
            message: 'You have chosen not to provide location permission',
          })
        );
        break;
    }
  }
}
