import { TestBed } from '@angular/core/testing';

import { GainersService } from './gainers.service';

describe('GainersService', () => {
  let service: GainersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GainersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
