import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidGaugeTwoComponent } from './solid-gauge-two.component';

describe('SolidGaugeTwoComponent', () => {
  let component: SolidGaugeTwoComponent;
  let fixture: ComponentFixture<SolidGaugeTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolidGaugeTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidGaugeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
