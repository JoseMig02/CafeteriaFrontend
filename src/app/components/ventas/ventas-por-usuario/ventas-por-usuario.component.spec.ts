import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPorUsuarioComponent } from './ventas-por-usuario.component';

describe('VentasPorUsuarioComponent', () => {
  let component: VentasPorUsuarioComponent;
  let fixture: ComponentFixture<VentasPorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentasPorUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasPorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
