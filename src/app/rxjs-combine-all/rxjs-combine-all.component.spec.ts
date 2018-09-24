import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCombineAllComponent } from './rxjs-combine-all.component';

describe('RxjsCombineAllComponent', () => {
  let component: RxjsCombineAllComponent;
  let fixture: ComponentFixture<RxjsCombineAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsCombineAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCombineAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
