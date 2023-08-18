import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

let component: AppComponent;
let fixture: ComponentFixture<AppComponent>

describe('AppComponent', () => {
    
  beforeEach(() => 
    TestBed.configureTestingModule({
        imports: [AppComponent]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  tests();
});

function tests() {
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have as title 'homes'`, () => {
    expect(component.title).toEqual('homes');
  });
  
  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByTagName('img')[0].alt).toEqual('logo');
  });
}