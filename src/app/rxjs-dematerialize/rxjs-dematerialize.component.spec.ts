import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDematerializeComponent } from './rxjs-dematerialize.component';

describe('RxjsDematerializeComponent', () => {
  let component: RxjsDematerializeComponent;
  let fixture: ComponentFixture<RxjsDematerializeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsDematerializeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDematerializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
