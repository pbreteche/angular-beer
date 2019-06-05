import { TestBed } from '@angular/core/testing';

import { CurrentBeerService } from './current-beer.service';

describe('CurrentBeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentBeerService = TestBed.get(CurrentBeerService);
    expect(service).toBeTruthy();
  });
});
