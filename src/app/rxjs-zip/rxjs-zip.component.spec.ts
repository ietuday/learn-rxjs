import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsZipComponent } from './rxjs-zip.component';

describe('RxjsZipComponent', () => {
  let component: RxjsZipComponent;
  let fixture: ComponentFixture<RxjsZipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsZipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsZipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
