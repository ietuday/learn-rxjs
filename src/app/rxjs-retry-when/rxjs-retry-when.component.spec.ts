import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRetryWhenComponent } from './rxjs-retry-when.component';

describe('RxjsRetryWhenComponent', () => {
  let component: RxjsRetryWhenComponent;
  let fixture: ComponentFixture<RxjsRetryWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsRetryWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsRetryWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
