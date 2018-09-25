import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDoComponent } from './rxjs-do.component';

describe('RxjsDoComponent', () => {
  let component: RxjsDoComponent;
  let fixture: ComponentFixture<RxjsDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
