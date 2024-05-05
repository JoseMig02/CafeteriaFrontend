import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerProveedorComponent } from './obtener-proveedor.component';

describe('ObtenerProveedorComponent', () => {
  let component: ObtenerProveedorComponent;
  let fixture: ComponentFixture<ObtenerProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
