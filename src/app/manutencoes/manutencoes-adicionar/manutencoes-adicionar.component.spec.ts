import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesAdicionarComponent } from './manutencoes-adicionar.component';

describe('ManutencoesAdicionarComponent', () => {
  let component: ManutencoesAdicionarComponent;
  let fixture: ComponentFixture<ManutencoesAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencoesAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencoesAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
