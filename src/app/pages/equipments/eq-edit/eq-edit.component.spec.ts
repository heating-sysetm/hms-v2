import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqEditComponent } from './eq-edit.component';

describe('EqEditComponent', () => {
  let component: EqEditComponent;
  let fixture: ComponentFixture<EqEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
