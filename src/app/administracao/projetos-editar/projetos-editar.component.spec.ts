import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosEditarComponent } from './projetos-editar.component';

describe('ProjetosEditarComponent', () => {
  let component: ProjetosEditarComponent;
  let fixture: ComponentFixture<ProjetosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
