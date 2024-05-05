import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarMarcaComponent } from './actualizar-marca.component';

describe('ActualizarMarcaComponent', () => {
  let component: ActualizarMarcaComponent;
  let fixture: ComponentFixture<ActualizarMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
