import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSkipWhileComponent } from './rxjs-skip-while.component';

describe('RxjsSkipWhileComponent', () => {
  let component: RxjsSkipWhileComponent;
  let fixture: ComponentFixture<RxjsSkipWhileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSkipWhileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSkipWhileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
