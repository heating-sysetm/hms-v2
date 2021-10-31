import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PompsStatusComponent } from './pomps-status.component';

describe('PompsStatusComponent', () => {
  let component: PompsStatusComponent;
  let fixture: ComponentFixture<PompsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PompsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PompsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
