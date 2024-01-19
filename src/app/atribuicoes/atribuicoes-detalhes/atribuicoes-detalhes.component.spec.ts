import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesDetalhesComponent } from './atribuicoes-detalhes.component';

describe('AtribuicoesDetalhesComponent', () => {
  let component: AtribuicoesDetalhesComponent;
  let fixture: ComponentFixture<AtribuicoesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
