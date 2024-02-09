import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesAdicionarComponent } from './requisicoes-adicionar.component';

describe('RequisicoesAdicionarComponent', () => {
  let component: RequisicoesAdicionarComponent;
  let fixture: ComponentFixture<RequisicoesAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisicoesAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisicoesAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
