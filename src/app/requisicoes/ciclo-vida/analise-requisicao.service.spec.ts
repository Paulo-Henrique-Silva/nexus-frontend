import { TestBed } from '@angular/core/testing';

import { AnaliseRequisicaoService } from './analise-requisicao.service';

describe('AnaliseRequisicaoService', () => {
  let service: AnaliseRequisicaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnaliseRequisicaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
