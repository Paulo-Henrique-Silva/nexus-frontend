import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesBuscarComponent } from './manutencoes-buscar.component';

describe('ManutencoesBuscarComponent', () => {
  let component: ManutencoesBuscarComponent;
  let fixture: ComponentFixture<ManutencoesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencoesBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencoesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
