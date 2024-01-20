import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesPerfilComponent } from './configuracoes-perfil.component';

describe('ConfiguracoesPerfilComponent', () => {
  let component: ConfiguracoesPerfilComponent;
  let fixture: ComponentFixture<ConfiguracoesPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracoesPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracoesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
