import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsIgnoreElementsComponent } from './rxjs-ignore-elements.component';

describe('RxjsIgnoreElementsComponent', () => {
  let component: RxjsIgnoreElementsComponent;
  let fixture: ComponentFixture<RxjsIgnoreElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsIgnoreElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsIgnoreElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
