import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBufferToggleComponent } from './rxjs-buffer-toggle.component';

describe('RxjsBufferToggleComponent', () => {
  let component: RxjsBufferToggleComponent;
  let fixture: ComponentFixture<RxjsBufferToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBufferToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBufferToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
