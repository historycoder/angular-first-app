import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

let component: DetailsComponent;
let fixture: ComponentFixture<DetailsComponent>;

describe('DetailsComponent', () => {

  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [DetailsComponent]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(DetailsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  tests();
});

function tests() {
  it('should create', () => {
    expect(component).toBeTruthy();
  });  
}