import { TestBed } from '@angular/core/testing';

import { ConexionService } from './conexion.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ConexionService', () => {
  let service: ConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
