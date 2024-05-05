import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPorFechaComponent } from './ventas-por-fecha.component';

describe('VentasPorFechaComponent', () => {
  let component: VentasPorFechaComponent;
  let fixture: ComponentFixture<VentasPorFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentasPorFechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasPorFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
