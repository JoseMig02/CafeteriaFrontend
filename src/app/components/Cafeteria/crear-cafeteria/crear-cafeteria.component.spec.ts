import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCafeteriaComponent } from './crear-cafeteria.component';

describe('CrearCafeteriaComponent', () => {
  let component: CrearCafeteriaComponent;
  let fixture: ComponentFixture<CrearCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearCafeteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
