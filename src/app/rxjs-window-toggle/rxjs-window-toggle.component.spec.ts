import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWindowToggleComponent } from './rxjs-window-toggle.component';

describe('RxjsWindowToggleComponent', () => {
  let component: RxjsWindowToggleComponent;
  let fixture: ComponentFixture<RxjsWindowToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWindowToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWindowToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
