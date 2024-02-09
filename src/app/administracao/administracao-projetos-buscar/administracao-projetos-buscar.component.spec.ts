import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoProjetosBuscarComponent } from './administracao-projetos-buscar.component';

describe('AdministracaoProjetosBuscarComponent', () => {
  let component: AdministracaoProjetosBuscarComponent;
  let fixture: ComponentFixture<AdministracaoProjetosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoProjetosBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoProjetosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
