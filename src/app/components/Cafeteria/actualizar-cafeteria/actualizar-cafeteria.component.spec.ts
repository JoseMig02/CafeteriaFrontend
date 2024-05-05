import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCafeteriaComponent } from './actualizar-cafeteria.component';

describe('ActualizarCafeteriaComponent', () => {
  let component: ActualizarCafeteriaComponent;
  let fixture: ComponentFixture<ActualizarCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarCafeteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
