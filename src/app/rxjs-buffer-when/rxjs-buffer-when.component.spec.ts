import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBufferWhenComponent } from './rxjs-buffer-when.component';

describe('RxjsBufferWhenComponent', () => {
  let component: RxjsBufferWhenComponent;
  let fixture: ComponentFixture<RxjsBufferWhenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBufferWhenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBufferWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
