import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBufferCountComponent } from './rxjs-buffer-count.component';

describe('RxjsBufferCountComponent', () => {
  let component: RxjsBufferCountComponent;
  let fixture: ComponentFixture<RxjsBufferCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBufferCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBufferCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
