import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesAcoesComponent } from './atribuicoes-acoes.component';

describe('AtribuicoesAcoesComponent', () => {
  let component: AtribuicoesAcoesComponent;
  let fixture: ComponentFixture<AtribuicoesAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
