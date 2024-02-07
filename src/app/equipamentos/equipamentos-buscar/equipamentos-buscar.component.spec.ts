import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosBuscarComponent } from './equipamentos-buscar.component';

describe('EquipamentosBuscarComponent', () => {
  let component: EquipamentosBuscarComponent;
  let fixture: ComponentFixture<EquipamentosBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipamentosBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipamentosBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
