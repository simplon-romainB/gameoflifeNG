/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnexionService } from './connexion.service';

describe('ConnexionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnexionService]
    });
  });

  it('should ...', inject([ConnexionService], (service: ConnexionService) => {
    expect(service).toBeTruthy();
  }));
});
