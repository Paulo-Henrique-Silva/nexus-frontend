import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoUsuariosAdicionarComponent } from './administracao-usuarios-adicionar.component';

describe('AdministracaoUsuariosAdicionarComponent', () => {
  let component: AdministracaoUsuariosAdicionarComponent;
  let fixture: ComponentFixture<AdministracaoUsuariosAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoUsuariosAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoUsuariosAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
