import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacoesAdicionarComponent } from './localizacoes-adicionar.component';

describe('LocalizacoesAdicionarComponent', () => {
  let component: LocalizacoesAdicionarComponent;
  let fixture: ComponentFixture<LocalizacoesAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacoesAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizacoesAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
