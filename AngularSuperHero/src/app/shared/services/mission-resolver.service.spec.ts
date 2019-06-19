import { TestBed } from '@angular/core/testing';

import { MissionResolverService } from './mission-resolver.service';

describe('MissionResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionResolverService = TestBed.get(MissionResolverService);
    expect(service).toBeTruthy();
  });
});
