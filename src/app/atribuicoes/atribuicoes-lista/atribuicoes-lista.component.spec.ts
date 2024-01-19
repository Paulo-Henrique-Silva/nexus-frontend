import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesListaComponent } from './atribuicoes-lista.component';

describe('AtribuicoesListaComponent', () => {
  let component: AtribuicoesListaComponent;
  let fixture: ComponentFixture<AtribuicoesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
