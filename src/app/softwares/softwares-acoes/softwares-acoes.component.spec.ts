import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresAcoesComponent } from './softwares-acoes.component';

describe('SoftwaresAcoesComponent', () => {
  let component: SoftwaresAcoesComponent;
  let fixture: ComponentFixture<SoftwaresAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwaresAcoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwaresAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
