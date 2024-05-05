import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarArticulosComponent } from './actualizar-articulos.component';

describe('ActualizarArticulosComponent', () => {
  let component: ActualizarArticulosComponent;
  let fixture: ComponentFixture<ActualizarArticulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarArticulosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
