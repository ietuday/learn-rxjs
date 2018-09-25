import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsExpandComponent } from './rxjs-expand.component';

describe('RxjsExpandComponent', () => {
  let component: RxjsExpandComponent;
  let fixture: ComponentFixture<RxjsExpandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsExpandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
