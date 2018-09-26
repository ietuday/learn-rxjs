import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsStartWithComponent } from './rxjs-start-with.component';

describe('RxjsStartWithComponent', () => {
  let component: RxjsStartWithComponent;
  let fixture: ComponentFixture<RxjsStartWithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsStartWithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsStartWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
