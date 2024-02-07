import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosAdicionarComponent } from './equipamentos-adicionar.component';

describe('EquipamentosAdicionarComponent', () => {
  let component: EquipamentosAdicionarComponent;
  let fixture: ComponentFixture<EquipamentosAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipamentosAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipamentosAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
