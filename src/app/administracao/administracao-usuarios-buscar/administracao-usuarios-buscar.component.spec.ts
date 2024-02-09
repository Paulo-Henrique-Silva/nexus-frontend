import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoUsuariosBuscarComponent } from './administracao-usuarios-buscar.component';

describe('AdministracaoUsuariosBuscarComponent', () => {
  let component: AdministracaoUsuariosBuscarComponent;
  let fixture: ComponentFixture<AdministracaoUsuariosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoUsuariosBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoUsuariosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
