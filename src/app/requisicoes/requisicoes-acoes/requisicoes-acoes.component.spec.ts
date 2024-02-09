import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesAcoesComponent } from './requisicoes-acoes.component';

describe('RequisicoesAcoesComponent', () => {
  let component: RequisicoesAcoesComponent;
  let fixture: ComponentFixture<RequisicoesAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisicoesAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisicoesAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
