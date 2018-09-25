import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRetryComponent } from './rxjs-retry.component';

describe('RxjsRetryComponent', () => {
  let component: RxjsRetryComponent;
  let fixture: ComponentFixture<RxjsRetryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsRetryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsRetryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
