import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsScanComponent } from './rxjs-scan.component';

describe('RxjsScanComponent', () => {
  let component: RxjsScanComponent;
  let fixture: ComponentFixture<RxjsScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
