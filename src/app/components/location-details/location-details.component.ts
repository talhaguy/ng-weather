import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent implements OnInit {
  @Input() locationName?: string;
  @Input() time?: number;
  @Input() weatherDescription?: string;

  constructor() {}

  ngOnInit(): void {}
}
