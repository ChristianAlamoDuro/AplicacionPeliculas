import { TestBed } from '@angular/core/testing';

import { ApiPeliculasService } from './api-peliculas.service';

describe('ApiPeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiPeliculasService = TestBed.get(ApiPeliculasService);
    expect(service).toBeTruthy();
  });
});
