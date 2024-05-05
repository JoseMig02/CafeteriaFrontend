import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasPorCampusComponent } from './ventas-por-campus.component';

describe('VentasPorCampusComponent', () => {
  let component: VentasPorCampusComponent;
  let fixture: ComponentFixture<VentasPorCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VentasPorCampusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasPorCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
