import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPublishComponent } from './rxjs-publish.component';

describe('RxjsPublishComponent', () => {
  let component: RxjsPublishComponent;
  let fixture: ComponentFixture<RxjsPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
