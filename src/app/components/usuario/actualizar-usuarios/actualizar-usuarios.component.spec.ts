import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarUsuariosComponent } from './actualizar-usuarios.component';

describe('ActualizarUsuariosComponent', () => {
  let component: ActualizarUsuariosComponent;
  let fixture: ComponentFixture<ActualizarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
