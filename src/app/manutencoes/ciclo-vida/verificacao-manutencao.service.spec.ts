import { TestBed } from '@angular/core/testing';

import { VerificacaoManutencaoService } from './verificacao-manutencao.service';

describe('VerificacaoManutencaoService', () => {
  let service: VerificacaoManutencaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificacaoManutencaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
