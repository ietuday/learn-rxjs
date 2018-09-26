import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWindowWhenComponent } from './rxjs-window-when.component';

describe('RxjsWindowWhenComponent', () => {
  let component: RxjsWindowWhenComponent;
  let fixture: ComponentFixture<RxjsWindowWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWindowWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWindowWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
