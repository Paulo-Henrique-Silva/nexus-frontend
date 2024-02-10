import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosGerenciarPerfisComponent } from './usuarios-gerenciar-perfis.component';

describe('UsuariosGerenciarPerfisComponent', () => {
  let component: UsuariosGerenciarPerfisComponent;
  let fixture: ComponentFixture<UsuariosGerenciarPerfisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosGerenciarPerfisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosGerenciarPerfisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
