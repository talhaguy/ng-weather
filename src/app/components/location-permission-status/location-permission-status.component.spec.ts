import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationPermissionStatusComponent } from './location-permission-status.component';

describe('LocationPermissionStatusComponent', () => {
  let component: LocationPermissionStatusComponent;
  let fixture: ComponentFixture<LocationPermissionStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationPermissionStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationPermissionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
