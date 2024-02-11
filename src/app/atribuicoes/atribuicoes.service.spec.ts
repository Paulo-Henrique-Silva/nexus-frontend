import { TestBed } from '@angular/core/testing';

import { AtribuicoesService } from './atribuicoes.service';

describe('AtribuicoesService', () => {
  let service: AtribuicoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtribuicoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
