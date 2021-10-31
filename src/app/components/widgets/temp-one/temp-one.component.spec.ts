import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempOneComponent } from './temp-one.component';

describe('TempOneComponent', () => {
  let component: TempOneComponent;
  let fixture: ComponentFixture<TempOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
