import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTipoProductoComponent } from './tabla-tipo-producto.component';

describe('TablaTipoProductoComponent', () => {
  let component: TablaTipoProductoComponent;
  let fixture: ComponentFixture<TablaTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTipoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
