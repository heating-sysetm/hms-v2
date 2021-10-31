import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetManagementComponent } from './widget-management.component';

describe('WidgetManagementComponent', () => {
  let component: WidgetManagementComponent;
  let fixture: ComponentFixture<WidgetManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
