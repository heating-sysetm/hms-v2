import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorFormModalComponent } from './sensor-form-modal.component';

describe('SensorFormModalComponent', () => {
  let component: SensorFormModalComponent;
  let fixture: ComponentFixture<SensorFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
