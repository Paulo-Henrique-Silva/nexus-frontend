import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivosListaComponent } from './ativos-lista.component';

describe('AtivosListaComponent', () => {
  let component: AtivosListaComponent;
  let fixture: ComponentFixture<AtivosListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtivosListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtivosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
