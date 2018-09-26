import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBehaviourSubjectComponent } from './rxjs-behaviour-subject.component';

describe('RxjsBehaviourSubjectComponent', () => {
  let component: RxjsBehaviourSubjectComponent;
  let fixture: ComponentFixture<RxjsBehaviourSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBehaviourSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
