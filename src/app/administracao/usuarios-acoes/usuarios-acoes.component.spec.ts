import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosAcoesComponent } from './usuarios-acoes.component';

describe('UsuariosAcoesComponent', () => {
  let component: UsuariosAcoesComponent;
  let fixture: ComponentFixture<UsuariosAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
