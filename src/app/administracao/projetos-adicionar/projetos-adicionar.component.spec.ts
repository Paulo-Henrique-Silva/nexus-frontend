import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosAdicionarComponent } from './projetos-adicionar.component';

describe('ProjetosAdicionarComponent', () => {
  let component: ProjetosAdicionarComponent;
  let fixture: ComponentFixture<ProjetosAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetosAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetosAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
