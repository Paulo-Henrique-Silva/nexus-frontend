import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoProjetosAdicionarComponent } from './administracao-projetos-adicionar.component';

describe('AdministracaoProjetosAdicionarComponent', () => {
  let component: AdministracaoProjetosAdicionarComponent;
  let fixture: ComponentFixture<AdministracaoProjetosAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoProjetosAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoProjetosAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
