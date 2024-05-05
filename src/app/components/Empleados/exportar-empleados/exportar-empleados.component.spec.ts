import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarEmpleadosComponent } from './exportar-empleados.component';

describe('ExportarEmpleadosComponent', () => {
  let component: ExportarEmpleadosComponent;
  let fixture: ComponentFixture<ExportarEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportarEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportarEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
