import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnRotatedThreeComponent } from './column-rotated-three.component';

describe('ColumnRotatedThreeComponent', () => {
  let component: ColumnRotatedThreeComponent;
  let fixture: ComponentFixture<ColumnRotatedThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnRotatedThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnRotatedThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
