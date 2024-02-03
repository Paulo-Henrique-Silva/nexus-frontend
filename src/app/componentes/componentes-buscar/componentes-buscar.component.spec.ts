import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesBuscarComponent } from './componentes-buscar.component';

describe('ComponentesBuscarComponent', () => {
  let component: ComponentesBuscarComponent;
  let fixture: ComponentFixture<ComponentesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
