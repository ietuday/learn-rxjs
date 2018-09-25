import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPartitionComponent } from './rxjs-partition.component';

describe('RxjsPartitionComponent', () => {
  let component: RxjsPartitionComponent;
  let fixture: ComponentFixture<RxjsPartitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPartitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPartitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
