import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosOpcoesComponent } from './ativos-opcoes.component';

describe('AtivosOpcoesComponent', () => {
  let component: AtivosOpcoesComponent;
  let fixture: ComponentFixture<AtivosOpcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtivosOpcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivosOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
