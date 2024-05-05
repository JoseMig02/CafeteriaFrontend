import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerUsuariosComponent } from './obtener-usuarios.component';

describe('ObtenerUsuariosComponent', () => {
  let component: ObtenerUsuariosComponent;
  let fixture: ComponentFixture<ObtenerUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
