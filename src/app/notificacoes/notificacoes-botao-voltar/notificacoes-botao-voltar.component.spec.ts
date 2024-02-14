import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesBotaoVoltarComponent } from './notificacoes-botao-voltar.component';

describe('NotificacoesBotaoVoltarComponent', () => {
  let component: NotificacoesBotaoVoltarComponent;
  let fixture: ComponentFixture<NotificacoesBotaoVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacoesBotaoVoltarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacoesBotaoVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
