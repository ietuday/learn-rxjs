import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMergeComponent } from './rxjs-merge.component';

describe('RxjsMergeComponent', () => {
  let component: RxjsMergeComponent;
  let fixture: ComponentFixture<RxjsMergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
