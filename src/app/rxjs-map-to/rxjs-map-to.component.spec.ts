import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMapToComponent } from './rxjs-map-to.component';

describe('RxjsMapToComponent', () => {
  let component: RxjsMapToComponent;
  let fixture: ComponentFixture<RxjsMapToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMapToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
