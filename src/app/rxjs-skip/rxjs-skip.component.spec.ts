import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSkipComponent } from './rxjs-skip.component';

describe('RxjsSkipComponent', () => {
  let component: RxjsSkipComponent;
  let fixture: ComponentFixture<RxjsSkipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSkipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSkipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
