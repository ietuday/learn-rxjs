import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsMergeMapComponent } from './rxjs-merge-map.component';

describe('RxjsMergeMapComponent', () => {
  let component: RxjsMergeMapComponent;
  let fixture: ComponentFixture<RxjsMergeMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsMergeMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsMergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
