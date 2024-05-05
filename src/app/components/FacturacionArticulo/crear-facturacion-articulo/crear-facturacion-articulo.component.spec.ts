import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturacionArticuloComponent } from './crear-facturacion-articulo.component';

describe('CrearFacturacionArticuloComponent', () => {
  let component: CrearFacturacionArticuloComponent;
  let fixture: ComponentFixture<CrearFacturacionArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearFacturacionArticuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearFacturacionArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
