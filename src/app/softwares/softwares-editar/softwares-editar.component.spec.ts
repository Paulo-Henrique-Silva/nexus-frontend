import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresEditarComponent } from './softwares-editar.component';

describe('SoftwaresEditarComponent', () => {
  let component: SoftwaresEditarComponent;
  let fixture: ComponentFixture<SoftwaresEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwaresEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwaresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
