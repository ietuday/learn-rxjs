import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDelayWhenComponent } from './rxjs-delay-when.component';

describe('RxjsDelayWhenComponent', () => {
  let component: RxjsDelayWhenComponent;
  let fixture: ComponentFixture<RxjsDelayWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDelayWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDelayWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
