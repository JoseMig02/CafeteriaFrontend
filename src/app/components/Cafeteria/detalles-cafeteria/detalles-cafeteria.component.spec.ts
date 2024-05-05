import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCafeteriaComponent } from './detalles-cafeteria.component';

describe('DetallesCafeteriaComponent', () => {
  let component: DetallesCafeteriaComponent;
  let fixture: ComponentFixture<DetallesCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetallesCafeteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
