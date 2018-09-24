import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatComponent } from './rxjs-concat.component';

describe('RxjsConcatComponent', () => {
  let component: RxjsConcatComponent;
  let fixture: ComponentFixture<RxjsConcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsConcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsConcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
