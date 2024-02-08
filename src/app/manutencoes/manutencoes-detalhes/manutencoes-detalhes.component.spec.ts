import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesDetalhesComponent } from './manutencoes-detalhes.component';

describe('ManutencoesDetalhesComponent', () => {
  let component: ManutencoesDetalhesComponent;
  let fixture: ComponentFixture<ManutencoesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencoesDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencoesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
