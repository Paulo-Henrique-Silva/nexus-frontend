import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosDetalhesComponent } from './projetos-detalhes.component';

describe('ProjetosDetalhesComponent', () => {
  let component: ProjetosDetalhesComponent;
  let fixture: ComponentFixture<ProjetosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
