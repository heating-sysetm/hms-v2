import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeTempComponent } from './gauge-temp.component';

describe('GaugeTempComponent', () => {
  let component: GaugeTempComponent;
  let fixture: ComponentFixture<GaugeTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
