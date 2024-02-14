import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSairFormularioComponent } from './dialog-sair-formulario.component';

describe('DialogSairFormularioComponent', () => {
  let component: DialogSairFormularioComponent;
  let fixture: ComponentFixture<DialogSairFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogSairFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogSairFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
