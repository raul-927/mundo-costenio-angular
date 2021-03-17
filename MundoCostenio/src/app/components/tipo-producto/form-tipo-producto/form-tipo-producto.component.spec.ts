import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoProductoComponent } from './form-tipo-producto.component';

describe('FormTipoProductoComponent', () => {
  let component: FormTipoProductoComponent;
  let fixture: ComponentFixture<FormTipoProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTipoProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
