import { TestBed } from '@angular/core/testing';

import { ServiciosGeneralService } from './servicios-general.service';

describe('ServiciosGeneralService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosGeneralService = TestBed.get(ServiciosGeneralService);
    expect(service).toBeTruthy();
  });
});
