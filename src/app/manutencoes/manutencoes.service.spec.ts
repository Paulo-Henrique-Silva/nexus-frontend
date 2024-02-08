import { TestBed } from '@angular/core/testing';

import { ManutencoesService } from './manutencoes.service';

describe('ManutencoesService', () => {
  let service: ManutencoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManutencoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
