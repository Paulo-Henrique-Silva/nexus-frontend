import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacoesAcoesComponent } from './localizacoes-acoes.component';

describe('LocalizacoesAcoesComponent', () => {
  let component: LocalizacoesAcoesComponent;
  let fixture: ComponentFixture<LocalizacoesAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacoesAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizacoesAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
