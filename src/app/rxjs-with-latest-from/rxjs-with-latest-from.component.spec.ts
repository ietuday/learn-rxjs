import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsWithLatestFromComponent } from './rxjs-with-latest-from.component';

describe('RxjsWithLatestFromComponent', () => {
  let component: RxjsWithLatestFromComponent;
  let fixture: ComponentFixture<RxjsWithLatestFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsWithLatestFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsWithLatestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
