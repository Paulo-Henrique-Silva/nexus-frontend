import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesMenuComponent } from './componentes-menu.component';

describe('ComponentesMenuComponent', () => {
  let component: ComponentesMenuComponent;
  let fixture: ComponentFixture<ComponentesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentesMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
