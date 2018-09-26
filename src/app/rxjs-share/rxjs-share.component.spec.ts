import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsShareComponent } from './rxjs-share.component';

describe('RxjsShareComponent', () => {
  let component: RxjsShareComponent;
  let fixture: ComponentFixture<RxjsShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
