import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesEditarSenhaComponent } from './configuracoes-editar-senha.component';

describe('ConfiguracoesEditarSenhaComponent', () => {
  let component: ConfiguracoesEditarSenhaComponent;
  let fixture: ComponentFixture<ConfiguracoesEditarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracoesEditarSenhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracoesEditarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
