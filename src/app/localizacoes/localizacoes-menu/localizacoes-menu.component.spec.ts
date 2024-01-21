import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacoesMenuComponent } from './localizacoes-menu.component';

describe('LocalizacoesMenuComponent', () => {
  let component: LocalizacoesMenuComponent;
  let fixture: ComponentFixture<LocalizacoesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalizacoesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocalizacoesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
