import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesAcoesComponent } from './manutencoes-acoes.component';

describe('ManutencoesAcoesComponent', () => {
  let component: ManutencoesAcoesComponent;
  let fixture: ComponentFixture<ManutencoesAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencoesAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencoesAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
