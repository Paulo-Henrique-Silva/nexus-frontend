import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacoesDetalhesComponent } from './localizacoes-detalhes.component';

describe('LocalizacoesDetalhesComponent', () => {
  let component: LocalizacoesDetalhesComponent;
  let fixture: ComponentFixture<LocalizacoesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacoesDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizacoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
