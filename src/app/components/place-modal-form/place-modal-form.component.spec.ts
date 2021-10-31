import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceModalFormComponent } from './place-modal-form.component';

describe('PlaceModalFormComponent', () => {
  let component: PlaceModalFormComponent;
  let fixture: ComponentFixture<PlaceModalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceModalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
