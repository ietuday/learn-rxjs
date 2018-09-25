import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsRepeatComponent } from './rxjs-repeat.component';

describe('RxjsRepeatComponent', () => {
  let component: RxjsRepeatComponent;
  let fixture: ComponentFixture<RxjsRepeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsRepeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsRepeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
