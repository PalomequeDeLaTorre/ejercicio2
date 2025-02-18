import { TestBed } from '@angular/core/testing';

import { AsteroidesService } from './asteroides.service';

describe('AsteroidesService', () => {
  let service: AsteroidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsteroidesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
