import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesDetalhesComponent } from './componentes-detalhes.component';

describe('ComponentesDetalhesComponent', () => {
  let component: ComponentesDetalhesComponent;
  let fixture: ComponentFixture<ComponentesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
