import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresAdicionarComponent } from './softwares-adicionar.component';

describe('SoftwaresAdicionarComponent', () => {
  let component: SoftwaresAdicionarComponent;
  let fixture: ComponentFixture<SoftwaresAdicionarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwaresAdicionarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwaresAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
