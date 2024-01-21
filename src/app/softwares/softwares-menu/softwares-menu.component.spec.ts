import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresMenuComponent } from './softwares-menu.component';

describe('SoftwaresMenuComponent', () => {
  let component: SoftwaresMenuComponent;
  let fixture: ComponentFixture<SoftwaresMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoftwaresMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwaresMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
