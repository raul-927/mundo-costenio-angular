import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColLeftComponent } from './col-left.component';

describe('ColLeftComponent', () => {
  let component: ColLeftComponent;
  let fixture: ComponentFixture<ColLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
