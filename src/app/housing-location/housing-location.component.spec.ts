import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing-location.component';
import { HousingLocation } from '../housinglocation';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HousingLocationComponent]
    });
    fixture = TestBed.createComponent(HousingLocationComponent);
    component = fixture.componentInstance;
    component.housingLocation = {
      name: 'test',
      id: 0,
      city: 'test',
      state: 'test',
      photo: 'test',
      availableUnits: 0,
      wifi: false,
      laundry: false
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
