import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidGaugeThreeComponent } from './solid-gauge-three.component';

describe('SolidGaugeThreeComponent', () => {
  let component: SolidGaugeThreeComponent;
  let fixture: ComponentFixture<SolidGaugeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidGaugeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidGaugeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
