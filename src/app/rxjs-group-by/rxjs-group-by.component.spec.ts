import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsGroupByComponent } from './rxjs-group-by.component';

describe('RxjsGroupByComponent', () => {
  let component: RxjsGroupByComponent;
  let fixture: ComponentFixture<RxjsGroupByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsGroupByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsGroupByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
