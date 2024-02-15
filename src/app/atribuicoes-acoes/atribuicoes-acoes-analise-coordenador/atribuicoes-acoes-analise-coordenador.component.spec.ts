import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesAcoesAnaliseCoordenadorComponent } from './atribuicoes-acoes-analise-coordenador.component';

describe('AtribuicoesAcoesAnaliseCoordenadorComponent', () => {
  let component: AtribuicoesAcoesAnaliseCoordenadorComponent;
  let fixture: ComponentFixture<AtribuicoesAcoesAnaliseCoordenadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesAcoesAnaliseCoordenadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesAcoesAnaliseCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
