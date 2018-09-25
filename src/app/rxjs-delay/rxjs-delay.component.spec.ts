import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDelayComponent } from './rxjs-delay.component';

describe('RxjsDelayComponent', () => {
  let component: RxjsDelayComponent;
  let fixture: ComponentFixture<RxjsDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
