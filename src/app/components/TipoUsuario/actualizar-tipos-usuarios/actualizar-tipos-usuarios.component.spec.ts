import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarTiposUsuariosComponent } from './actualizar-tipos-usuarios.component';

describe('ActualizarTiposUsuariosComponent', () => {
  let component: ActualizarTiposUsuariosComponent;
  let fixture: ComponentFixture<ActualizarTiposUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarTiposUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarTiposUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
