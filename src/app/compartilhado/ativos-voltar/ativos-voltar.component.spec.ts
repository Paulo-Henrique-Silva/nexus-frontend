import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosVoltarComponent } from './ativos-voltar.component';

describe('AtivosVoltarComponent', () => {
  let component: AtivosVoltarComponent;
  let fixture: ComponentFixture<AtivosVoltarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtivosVoltarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivosVoltarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
