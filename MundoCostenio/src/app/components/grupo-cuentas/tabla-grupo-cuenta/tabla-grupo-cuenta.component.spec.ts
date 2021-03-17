import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGrupoCuentaComponent } from './tabla-grupo-cuenta.component';

describe('TablaGrupoCuentaComponent', () => {
  let component: TablaGrupoCuentaComponent;
  let fixture: ComponentFixture<TablaGrupoCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaGrupoCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaGrupoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
