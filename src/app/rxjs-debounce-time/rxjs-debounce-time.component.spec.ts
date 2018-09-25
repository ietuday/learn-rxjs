import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDebounceTimeComponent } from './rxjs-debounce-time.component';

describe('RxjsDebounceTimeComponent', () => {
  let component: RxjsDebounceTimeComponent;
  let fixture: ComponentFixture<RxjsDebounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDebounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDebounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
