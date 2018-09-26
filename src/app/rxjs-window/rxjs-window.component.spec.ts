import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWindowComponent } from './rxjs-window.component';

describe('RxjsWindowComponent', () => {
  let component: RxjsWindowComponent;
  let fixture: ComponentFixture<RxjsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
