import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesAdicionarComponent } from './componentes-adicionar.component';

describe('ComponentesAdicionarComponent', () => {
  let component: ComponentesAdicionarComponent;
  let fixture: ComponentFixture<ComponentesAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
