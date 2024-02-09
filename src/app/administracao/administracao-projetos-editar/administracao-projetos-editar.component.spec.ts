import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoProjetosEditarComponent } from './administracao-projetos-editar.component';

describe('AdministracaoProjetosEditarComponent', () => {
  let component: AdministracaoProjetosEditarComponent;
  let fixture: ComponentFixture<AdministracaoProjetosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoProjetosEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoProjetosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
