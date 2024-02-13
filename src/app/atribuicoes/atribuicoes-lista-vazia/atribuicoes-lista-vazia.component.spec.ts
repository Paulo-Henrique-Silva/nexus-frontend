import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesListaVaziaComponent } from './atribuicoes-lista-vazia.component';

describe('AtribuicoesListaVaziaComponent', () => {
  let component: AtribuicoesListaVaziaComponent;
  let fixture: ComponentFixture<AtribuicoesListaVaziaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesListaVaziaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesListaVaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
