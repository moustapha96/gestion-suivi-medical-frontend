import { TestBed } from '@angular/core/testing';

import { MomosService } from './momos.service';

describe('MomosService', () => {
  let service: MomosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
