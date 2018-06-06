import { TestBed, inject } from '@angular/core/testing';

import { ExtraProfileService } from './extra-profile.service';

describe('ExtraProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExtraProfileService]
    });
  });

  it('should be created', inject([ExtraProfileService], (service: ExtraProfileService) => {
    expect(service).toBeTruthy();
  }));
});
