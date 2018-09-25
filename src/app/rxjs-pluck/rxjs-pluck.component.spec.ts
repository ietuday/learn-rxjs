import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPluckComponent } from './rxjs-pluck.component';

describe('RxjsPluckComponent', () => {
  let component: RxjsPluckComponent;
  let fixture: ComponentFixture<RxjsPluckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPluckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPluckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
