import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosDetalhesComponent } from './equipamentos-detalhes.component';

describe('EquipamentosDetalhesComponent', () => {
  let component: EquipamentosDetalhesComponent;
  let fixture: ComponentFixture<EquipamentosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipamentosDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipamentosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
