import { TestBed } from '@angular/core/testing';

import { GrupoCuentaService } from './grupo-cuenta.service';

describe('GrupoCuentaService', () => {
  let service: GrupoCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrupoCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
