import { TestBed, inject } from '@angular/core/testing';

import { HeroDataStoreService } from './hero-data-store.service';

describe('HeroDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDataStoreService]
    });
  });

  it('should be created', inject([HeroDataStoreService], (service: HeroDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
