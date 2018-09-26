import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSwitchMapComponent } from './rxjs-switch-map.component';

describe('RxjsSwitchMapComponent', () => {
  let component: RxjsSwitchMapComponent;
  let fixture: ComponentFixture<RxjsSwitchMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSwitchMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
