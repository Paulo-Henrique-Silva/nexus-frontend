import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentosMenuComponent } from './equipamentos-menu.component';

describe('EquipamentosMenuComponent', () => {
  let component: EquipamentosMenuComponent;
  let fixture: ComponentFixture<EquipamentosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipamentosMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquipamentosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
