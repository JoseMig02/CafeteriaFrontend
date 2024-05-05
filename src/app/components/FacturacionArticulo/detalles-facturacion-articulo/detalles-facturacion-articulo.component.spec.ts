import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesFacturacionArticuloComponent } from './detalles-facturacion-articulo.component';

describe('DetallesFacturacionArticuloComponent', () => {
  let component: DetallesFacturacionArticuloComponent;
  let fixture: ComponentFixture<DetallesFacturacionArticuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesFacturacionArticuloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesFacturacionArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
