import { TestBed, inject } from '@angular/core/testing';

import { MissionDataStoreService } from './mission-data-store.service';

describe('MissionDataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissionDataStoreService]
    });
  });

  it('should be created', inject([MissionDataStoreService], (service: MissionDataStoreService) => {
    expect(service).toBeTruthy();
  }));
});
