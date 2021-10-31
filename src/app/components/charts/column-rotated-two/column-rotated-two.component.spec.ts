import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRotatedTwoComponent } from './column-rotated-two.component';

describe('ColumnRotatedTwoComponent', () => {
  let component: ColumnRotatedTwoComponent;
  let fixture: ComponentFixture<ColumnRotatedTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnRotatedTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnRotatedTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
