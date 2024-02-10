import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosBuscarComponent } from './projetos-buscar.component';

describe('ProjetosBuscarComponent', () => {
  let component: ProjetosBuscarComponent;
  let fixture: ComponentFixture<ProjetosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
