import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresDetalhesComponent } from './softwares-detalhes.component';

describe('SoftwaresDetalhesComponent', () => {
  let component: SoftwaresDetalhesComponent;
  let fixture: ComponentFixture<SoftwaresDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwaresDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwaresDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
