import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerTiposUsuarioComponent } from './obtener-tipos-usuarios.component';

describe('ObtenerTiposUsuariosComponent', () => {
  let component: ObtenerTiposUsuariosComponent;
  let fixture: ComponentFixture<ObtenerTiposUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerTiposUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerTiposUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
