import { TestBed } from '@angular/core/testing';

import { WtsOtpService } from './wts-otp.service';

describe('WtsOtpService', () => {
  let service: WtsOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WtsOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
