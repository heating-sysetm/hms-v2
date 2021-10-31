import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStatusBarComponent } from './dashboard-status-bar.component';

describe('DashboardStatusBarComponent', () => {
  let component: DashboardStatusBarComponent;
  let fixture: ComponentFixture<DashboardStatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardStatusBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
