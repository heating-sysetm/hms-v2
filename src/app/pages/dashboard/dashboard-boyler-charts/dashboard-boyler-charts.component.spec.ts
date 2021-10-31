import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBoylerChartsComponent } from './dashboard-boyler-charts.component';

describe('DashboardBoylerChartsComponent', () => {
  let component: DashboardBoylerChartsComponent;
  let fixture: ComponentFixture<DashboardBoylerChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBoylerChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBoylerChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
