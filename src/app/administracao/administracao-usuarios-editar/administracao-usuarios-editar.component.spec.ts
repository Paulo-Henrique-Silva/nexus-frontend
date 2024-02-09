import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracaoUsuariosEditarComponent } from './administracao-usuarios-editar.component';

describe('AdministracaoUsuariosEditarComponent', () => {
  let component: AdministracaoUsuariosEditarComponent;
  let fixture: ComponentFixture<AdministracaoUsuariosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdministracaoUsuariosEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdministracaoUsuariosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
