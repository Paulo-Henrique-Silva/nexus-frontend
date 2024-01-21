import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicoesMenuComponent } from './requisicoes-menu.component';

describe('RequisicoesMenuComponent', () => {
  let component: RequisicoesMenuComponent;
  let fixture: ComponentFixture<RequisicoesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequisicoesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequisicoesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
