import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-permission-status',
  templateUrl: './location-permission-status.component.html',
  styleUrls: ['./location-permission-status.component.scss'],
})
export class LocationPermissionStatusComponent implements OnInit {
  @Input() hasPermission = false;

  constructor() {}

  ngOnInit(): void {}
}
