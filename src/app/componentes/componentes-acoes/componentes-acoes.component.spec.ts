import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesAcoesComponent } from './componentes-acoes.component';

describe('ComponentesAcoesComponent', () => {
  let component: ComponentesAcoesComponent;
  let fixture: ComponentFixture<ComponentesAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
