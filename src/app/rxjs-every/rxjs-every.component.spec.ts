import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsEveryComponent } from './rxjs-every.component';

describe('RxjsEveryComponent', () => {
  let component: RxjsEveryComponent;
  let fixture: ComponentFixture<RxjsEveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsEveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsEveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
