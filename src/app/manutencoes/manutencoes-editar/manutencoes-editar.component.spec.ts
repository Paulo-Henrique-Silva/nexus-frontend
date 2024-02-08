import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesEditarComponent } from './manutencoes-editar.component';

describe('ManutencoesEditarComponent', () => {
  let component: ManutencoesEditarComponent;
  let fixture: ComponentFixture<ManutencoesEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencoesEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencoesEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
