import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesEditarComponent } from './requisicoes-editar.component';

describe('RequisicoesEditarComponent', () => {
  let component: RequisicoesEditarComponent;
  let fixture: ComponentFixture<RequisicoesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisicoesEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisicoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
