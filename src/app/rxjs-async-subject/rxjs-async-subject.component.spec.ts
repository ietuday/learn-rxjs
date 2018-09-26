import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsAsyncSubjectComponent } from './rxjs-async-subject.component';

describe('RxjsAsyncSubjectComponent', () => {
  let component: RxjsAsyncSubjectComponent;
  let fixture: ComponentFixture<RxjsAsyncSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsAsyncSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsAsyncSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
