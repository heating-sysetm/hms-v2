import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineRotatedComponent } from './line-rotated.component';

describe('LineRotatedComponent', () => {
  let component: LineRotatedComponent;
  let fixture: ComponentFixture<LineRotatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineRotatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineRotatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
