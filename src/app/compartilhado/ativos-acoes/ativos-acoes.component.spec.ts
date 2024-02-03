import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosAcoesComponent } from './ativos-acoes.component';

describe('AtivosAcoesComponent', () => {
  let component: AtivosAcoesComponent;
  let fixture: ComponentFixture<AtivosAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtivosAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivosAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
