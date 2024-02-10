import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosDetalhesComponent } from './usuarios-detalhes.component';

describe('UsuariosDetalhesComponent', () => {
  let component: UsuariosDetalhesComponent;
  let fixture: ComponentFixture<UsuariosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsuariosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
