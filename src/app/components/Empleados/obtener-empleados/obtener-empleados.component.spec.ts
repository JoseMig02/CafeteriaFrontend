import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerEmpleadosComponent } from './obtener-empleados.component';

describe('ObtenerEmpleadosComponent', () => {
  let component: ObtenerEmpleadosComponent;
  let fixture: ComponentFixture<ObtenerEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
