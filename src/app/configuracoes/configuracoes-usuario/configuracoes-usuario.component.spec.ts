import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesUsuarioComponent } from './configuracoes-usuario.component';

describe('ConfiguracoesUsuarioComponent', () => {
  let component: ConfiguracoesUsuarioComponent;
  let fixture: ComponentFixture<ConfiguracoesUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracoesUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracoesUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
