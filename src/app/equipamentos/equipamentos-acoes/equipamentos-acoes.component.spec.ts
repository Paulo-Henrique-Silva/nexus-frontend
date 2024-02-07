import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosAcoesComponent } from './equipamentos-acoes.component';

describe('EquipamentosAcoesComponent', () => {
  let component: EquipamentosAcoesComponent;
  let fixture: ComponentFixture<EquipamentosAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipamentosAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipamentosAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
