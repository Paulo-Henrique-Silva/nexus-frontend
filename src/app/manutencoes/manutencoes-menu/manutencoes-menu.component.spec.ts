import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencoesMenuComponent } from './manutencoes-menu.component';

describe('ManutencoesMenuComponent', () => {
  let component: ManutencoesMenuComponent;
  let fixture: ComponentFixture<ManutencoesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManutencoesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManutencoesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
