import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesBotaoVoltarComponent } from './atribuicoes-botao-voltar.component';

describe('AtribuicoesBotaoVoltarComponent', () => {
  let component: AtribuicoesBotaoVoltarComponent;
  let fixture: ComponentFixture<AtribuicoesBotaoVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesBotaoVoltarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesBotaoVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
