import { TestBed } from '@angular/core/testing';

import { MensagensValidacaoService } from './mensagens-validacao.service';

describe('MensagensValidacaoService', () => {
  let service: MensagensValidacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagensValidacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
