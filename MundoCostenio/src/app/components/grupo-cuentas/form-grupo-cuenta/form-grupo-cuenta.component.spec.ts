import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGrupoCuentaComponent } from './form-grupo-cuenta.component';

describe('FormGrupoCuentaComponent', () => {
  let component: FormGrupoCuentaComponent;
  let fixture: ComponentFixture<FormGrupoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGrupoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGrupoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
