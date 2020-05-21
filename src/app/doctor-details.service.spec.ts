import { TestBed } from '@angular/core/testing';

import { DoctorDetailsService } from './doctor-details.service';

describe('DoctorDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorDetailsService = TestBed.get(DoctorDetailsService);
    expect(service).toBeTruthy();
  });
});
