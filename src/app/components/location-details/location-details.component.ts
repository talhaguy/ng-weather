import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent implements OnInit {
  @Input() locationName?: string;
  @Input() time?: number;
  @Input() weatherDescription?: string;
  @Input() hasLocationPermissions = false;
  @Output() onRefreshLocation = new EventEmitter<undefined>();

  constructor() {}

  ngOnInit(): void {}

  refreshLocation() {
    this.onRefreshLocation.emit();
  }
}
