import { TestBed } from '@angular/core/testing';

import { LocalizacoesService } from './localizacoes.service';

describe('LocalizacoesService', () => {
  let service: LocalizacoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizacoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
