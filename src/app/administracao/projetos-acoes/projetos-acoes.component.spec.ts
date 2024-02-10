import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosAcoesComponent } from './projetos-acoes.component';

describe('ProjetosAcoesComponent', () => {
  let component: ProjetosAcoesComponent;
  let fixture: ComponentFixture<ProjetosAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
