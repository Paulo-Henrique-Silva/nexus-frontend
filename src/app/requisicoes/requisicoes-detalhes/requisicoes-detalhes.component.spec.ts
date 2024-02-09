import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesDetalhesComponent } from './requisicoes-detalhes.component';

describe('RequisicoesDetalhesComponent', () => {
  let component: RequisicoesDetalhesComponent;
  let fixture: ComponentFixture<RequisicoesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisicoesDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisicoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
