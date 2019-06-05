import { TestBed } from '@angular/core/testing';

import { BeerListService } from './beer-list.service';

describe('BeerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerListService = TestBed.get(BeerListService);
    expect(service).toBeTruthy();
  });
});
