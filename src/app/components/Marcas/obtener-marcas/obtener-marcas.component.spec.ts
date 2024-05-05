import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerMarcasComponent } from './obtener-marcas.component';

describe('ObtenerMarcasComponent', () => {
  let component: ObtenerMarcasComponent;
  let fixture: ComponentFixture<ObtenerMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerMarcasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
