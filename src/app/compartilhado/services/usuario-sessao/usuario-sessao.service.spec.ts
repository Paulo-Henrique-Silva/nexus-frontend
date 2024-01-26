import { TestBed } from '@angular/core/testing';

import { UsuarioSessaoService } from './usuario-sessao.service';

describe('UsuarioSessaoService', () => {
  let service: UsuarioSessaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioSessaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
