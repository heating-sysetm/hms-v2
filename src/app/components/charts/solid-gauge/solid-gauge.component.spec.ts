import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidGaugeComponent } from './solid-gauge.component';

describe('SolidGaugeComponent', () => {
  let component: SolidGaugeComponent;
  let fixture: ComponentFixture<SolidGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
