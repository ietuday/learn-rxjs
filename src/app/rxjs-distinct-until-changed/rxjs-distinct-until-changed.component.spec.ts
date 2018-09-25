import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDistinctUntilChangedComponent } from './rxjs-distinct-until-changed.component';

describe('RxjsDistinctUntilChangedComponent', () => {
  let component: RxjsDistinctUntilChangedComponent;
  let fixture: ComponentFixture<RxjsDistinctUntilChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDistinctUntilChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDistinctUntilChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
