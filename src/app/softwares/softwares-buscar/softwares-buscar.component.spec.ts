import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresBuscarComponent } from './softwares-buscar.component';

describe('SoftwaresBuscarComponent', () => {
  let component: SoftwaresBuscarComponent;
  let fixture: ComponentFixture<SoftwaresBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwaresBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwaresBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
