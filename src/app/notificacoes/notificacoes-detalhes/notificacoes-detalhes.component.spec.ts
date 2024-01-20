import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesDetalhesComponent } from './notificacoes-detalhes.component';

describe('NotificacoesDetalhesComponent', () => {
  let component: NotificacoesDetalhesComponent;
  let fixture: ComponentFixture<NotificacoesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacoesDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
