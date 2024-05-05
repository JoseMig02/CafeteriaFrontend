import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerCafeteriasComponent } from './obtener-cafeterias.component';

describe('ObtenerCafeteriasComponent', () => {
  let component: ObtenerCafeteriasComponent;
  let fixture: ComponentFixture<ObtenerCafeteriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerCafeteriasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerCafeteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
