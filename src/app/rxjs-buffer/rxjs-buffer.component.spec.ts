import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBufferComponent } from './rxjs-buffer.component';

describe('RxjsBufferComponent', () => {
  let component: RxjsBufferComponent;
  let fixture: ComponentFixture<RxjsBufferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBufferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
