import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsReplaySubjectComponent } from './rxjs-replay-subject.component';

describe('RxjsReplaySubjectComponent', () => {
  let component: RxjsReplaySubjectComponent;
  let fixture: ComponentFixture<RxjsReplaySubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsReplaySubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsReplaySubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
