import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarFacturacionArticulosComponent } from './actualizar-facturacion-articulos.component';

describe('ActualizarFacturacionArticulosComponent', () => {
  let component: ActualizarFacturacionArticulosComponent;
  let fixture: ComponentFixture<ActualizarFacturacionArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarFacturacionArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarFacturacionArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
