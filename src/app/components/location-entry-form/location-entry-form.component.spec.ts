import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationEntryFormComponent } from './location-entry-form.component';

describe('LocationEntryFormComponent', () => {
  let component: LocationEntryFormComponent;
  let fixture: ComponentFixture<LocationEntryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationEntryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
