import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLastComponent } from './rxjs-last.component';

describe('RxjsLastComponent', () => {
  let component: RxjsLastComponent;
  let fixture: ComponentFixture<RxjsLastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsLastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
