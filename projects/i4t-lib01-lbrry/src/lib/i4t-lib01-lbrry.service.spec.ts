import { TestBed } from '@angular/core/testing';

import { I4tLib01LbrryService } from './i4t-lib01-lbrry.service';

describe('I4tLib01LbrryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: I4tLib01LbrryService = TestBed.get(I4tLib01LbrryService);
    expect(service).toBeTruthy();
  });
});
