import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmpleadoComponent } from './eliminar-empleado.component';

describe('EliminarEmpleadoComponent', () => {
  let component: EliminarEmpleadoComponent;
  let fixture: ComponentFixture<EliminarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarEmpleadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
