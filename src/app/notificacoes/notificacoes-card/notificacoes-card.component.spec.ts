import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacoesCardComponent } from './notificacoes-card.component';

describe('NotificacoesCardComponent', () => {
  let component: NotificacoesCardComponent;
  let fixture: ComponentFixture<NotificacoesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotificacoesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificacoesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
