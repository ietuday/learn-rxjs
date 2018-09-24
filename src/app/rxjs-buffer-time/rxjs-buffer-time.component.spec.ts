import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBufferTimeComponent } from './rxjs-buffer-time.component';

describe('RxjsBufferTimeComponent', () => {
  let component: RxjsBufferTimeComponent;
  let fixture: ComponentFixture<RxjsBufferTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBufferTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBufferTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
