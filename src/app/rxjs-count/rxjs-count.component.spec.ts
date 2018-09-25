import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCountComponent } from './rxjs-count.component';

describe('RxjsCountComponent', () => {
  let component: RxjsCountComponent;
  let fixture: ComponentFixture<RxjsCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
