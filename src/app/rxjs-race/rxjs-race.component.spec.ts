import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRaceComponent } from './rxjs-race.component';

describe('RxjsRaceComponent', () => {
  let component: RxjsRaceComponent;
  let fixture: ComponentFixture<RxjsRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
