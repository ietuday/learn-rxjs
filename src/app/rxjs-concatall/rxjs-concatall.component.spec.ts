import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatallComponent } from './rxjs-concatall.component';

describe('RxjsConcatallComponent', () => {
  let component: RxjsConcatallComponent;
  let fixture: ComponentFixture<RxjsConcatallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsConcatallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsConcatallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
