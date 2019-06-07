import { TestBed } from '@angular/core/testing';

import { BeerListService } from './beer-list.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MyCurrencyPipe} from './my-currency.pipe';

describe('BeerListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    declarations: [MyCurrencyPipe]
  }));

  it('should be created', () => {
    const service: BeerListService = TestBed.get(BeerListService);
    expect(service).toBeTruthy();
  });
});
