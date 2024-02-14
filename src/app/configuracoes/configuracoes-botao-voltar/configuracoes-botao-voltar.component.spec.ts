import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracoesBotaoVoltarComponent } from './configuracoes-botao-voltar.component';

describe('ConfiguracoesBotaoVoltarComponent', () => {
  let component: ConfiguracoesBotaoVoltarComponent;
  let fixture: ComponentFixture<ConfiguracoesBotaoVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfiguracoesBotaoVoltarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracoesBotaoVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
