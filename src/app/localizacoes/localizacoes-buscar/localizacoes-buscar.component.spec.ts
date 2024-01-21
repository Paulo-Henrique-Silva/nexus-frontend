import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacoesBuscarComponent } from './localizacoes-buscar.component';

describe('LocalizacoesBuscarComponent', () => {
  let component: LocalizacoesBuscarComponent;
  let fixture: ComponentFixture<LocalizacoesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacoesBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizacoesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
