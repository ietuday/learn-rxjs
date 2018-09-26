import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWindowCountComponent } from './rxjs-window-count.component';

describe('RxjsWindowCountComponent', () => {
  let component: RxjsWindowCountComponent;
  let fixture: ComponentFixture<RxjsWindowCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWindowCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWindowCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
