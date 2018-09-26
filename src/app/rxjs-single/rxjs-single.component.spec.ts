import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSingleComponent } from './rxjs-single.component';

describe('RxjsSingleComponent', () => {
  let component: RxjsSingleComponent;
  let fixture: ComponentFixture<RxjsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
