import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCuentaComponent } from './tabla-cuenta.component';

describe('TablaCuentaComponent', () => {
  let component: TablaCuentaComponent;
  let fixture: ComponentFixture<TablaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
