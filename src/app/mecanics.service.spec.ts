/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MecanicsService } from './mecanics.service';

describe('MecanicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MecanicsService]
    });
  });

  it('should ...', inject([MecanicsService], (service: MecanicsService) => {
    expect(service).toBeTruthy();
  }));
});
