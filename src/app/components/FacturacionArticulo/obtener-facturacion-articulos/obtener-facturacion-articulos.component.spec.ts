import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerFacturacionArticulosComponent } from './obtener-facturacion-articulos.component';

describe('ObtenerFacturacionArticulosComponent', () => {
  let component: ObtenerFacturacionArticulosComponent;
  let fixture: ComponentFixture<ObtenerFacturacionArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerFacturacionArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerFacturacionArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
