import { TestBed } from '@angular/core/testing';

import { HeroResolverService } from './hero-resolver.service';

describe('HeroResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroResolverService = TestBed.get(HeroResolverService);
    expect(service).toBeTruthy();
  });
});
