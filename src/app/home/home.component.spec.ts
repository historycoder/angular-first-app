import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

let component: HomeComponent;
let fixture: ComponentFixture<HomeComponent>;

describe('HomeComponent', () => {

  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HomeComponent);
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