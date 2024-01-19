import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtribuicoesCardComponent } from './atribuicoes-card.component';

describe('AtribuicoesCardComponent', () => {
  let component: AtribuicoesCardComponent;
  let fixture: ComponentFixture<AtribuicoesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtribuicoesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtribuicoesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
