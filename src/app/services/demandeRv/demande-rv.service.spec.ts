import { TestBed } from '@angular/core/testing';

import { DemandeRvService } from './demande-rv.service';

describe('DemandeRvService', () => {
  let service: DemandeRvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeRvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
