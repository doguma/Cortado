import { TestBed, inject } from '@angular/core/testing';

import { NoticeService } from './notice.service';

describe('NoticeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticeService]
    });
  });

  it('should be created', inject([NoticeService], (service: NoticeService) => {
    expect(service).toBeTruthy();
  }));
});
