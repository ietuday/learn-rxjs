import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWindowTimeComponent } from './rxjs-window-time.component';

describe('RxjsWindowTimeComponent', () => {
  let component: RxjsWindowTimeComponent;
  let fixture: ComponentFixture<RxjsWindowTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWindowTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWindowTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
