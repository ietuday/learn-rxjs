import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDefaultIfEmptyComponent } from './rxjs-default-if-empty.component';

describe('RxjsDefaultIfEmptyComponent', () => {
  let component: RxjsDefaultIfEmptyComponent;
  let fixture: ComponentFixture<RxjsDefaultIfEmptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDefaultIfEmptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDefaultIfEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
