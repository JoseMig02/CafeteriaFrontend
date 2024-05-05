import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerArticulosComponent } from './obtener-articulos.component';

describe('ObtenerArticulosComponent', () => {
  let component: ObtenerArticulosComponent;
  let fixture: ComponentFixture<ObtenerArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
