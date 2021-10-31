import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsAreaComponent } from './chartjs-area.component';

describe('ChartjsAreaComponent', () => {
  let component: ChartjsAreaComponent;
  let fixture: ComponentFixture<ChartjsAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartjsAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
