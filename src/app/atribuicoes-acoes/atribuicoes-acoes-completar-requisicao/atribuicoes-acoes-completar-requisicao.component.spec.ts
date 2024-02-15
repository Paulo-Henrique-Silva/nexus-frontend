import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesAcoesCompletarRequisicaoComponent } from './atribuicoes-acoes-completar-requisicao.component';

describe('AtribuicoesAcoesCompletarRequisicaoComponent', () => {
  let component: AtribuicoesAcoesCompletarRequisicaoComponent;
  let fixture: ComponentFixture<AtribuicoesAcoesCompletarRequisicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesAcoesCompletarRequisicaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesAcoesCompletarRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
