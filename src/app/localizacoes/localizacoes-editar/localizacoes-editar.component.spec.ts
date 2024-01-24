import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacoesEditarComponent } from './localizacoes-editar.component';

describe('LocalizacoesEditarComponent', () => {
  let component: LocalizacoesEditarComponent;
  let fixture: ComponentFixture<LocalizacoesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacoesEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizacoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
