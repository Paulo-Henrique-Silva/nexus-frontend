import { TestBed } from '@angular/core/testing';

import { SessaoService } from './sessao.service';

describe('UsuarioSessaoService', () => {
  let service: SessaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
