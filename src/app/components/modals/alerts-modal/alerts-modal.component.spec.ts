import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsModalComponent } from './alerts-modal.component';

describe('AlertsModalComponent', () => {
  let component: AlertsModalComponent;
  let fixture: ComponentFixture<AlertsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
