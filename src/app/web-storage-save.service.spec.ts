import { TestBed } from '@angular/core/testing';

import { WebStorageSaveService } from './web-storage-save.service';

describe('WebStorageSaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebStorageSaveService = TestBed.get(WebStorageSaveService);
    expect(service).toBeTruthy();
  });
});
