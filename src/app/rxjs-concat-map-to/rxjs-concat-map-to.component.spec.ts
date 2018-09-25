import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsConcatMapToComponent } from './rxjs-concat-map-to.component';

describe('RxjsConcatMapToComponent', () => {
  let component: RxjsConcatMapToComponent;
  let fixture: ComponentFixture<RxjsConcatMapToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsConcatMapToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsConcatMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
