import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesBuscarComponent } from './requisicoes-buscar.component';

describe('RequisicoesBuscarComponent', () => {
  let component: RequisicoesBuscarComponent;
  let fixture: ComponentFixture<RequisicoesBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisicoesBuscarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisicoesBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
