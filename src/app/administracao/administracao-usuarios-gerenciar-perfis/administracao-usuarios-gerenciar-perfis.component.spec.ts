import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoUsuariosGerenciarPerfisComponent } from './administracao-usuarios-gerenciar-perfis.component';

describe('AdministracaoUsuariosGerenciarPerfisComponent', () => {
  let component: AdministracaoUsuariosGerenciarPerfisComponent;
  let fixture: ComponentFixture<AdministracaoUsuariosGerenciarPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoUsuariosGerenciarPerfisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoUsuariosGerenciarPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
