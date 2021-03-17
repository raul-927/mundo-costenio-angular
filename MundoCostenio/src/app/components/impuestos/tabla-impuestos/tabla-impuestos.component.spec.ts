import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaImpuestosComponent } from './tabla-impuestos.component';

describe('TablaImpuestosComponent', () => {
  let component: TablaImpuestosComponent;
  let fixture: ComponentFixture<TablaImpuestosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaImpuestosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaImpuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
