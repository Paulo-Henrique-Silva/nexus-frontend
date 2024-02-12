import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesAcoesCompletarManutencaoComponent } from './atribuicoes-acoes-completar-manutencao.component';

describe('AtribuicoesAcoesCompletarManutencaoComponent', () => {
  let component: AtribuicoesAcoesCompletarManutencaoComponent;
  let fixture: ComponentFixture<AtribuicoesAcoesCompletarManutencaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesAcoesCompletarManutencaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesAcoesCompletarManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
