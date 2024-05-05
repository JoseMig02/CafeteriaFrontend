import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerCampusComponent } from './obtener-campus.component';

describe('ObtenerCampusComponent', () => {
  let component: ObtenerCampusComponent;
  let fixture: ComponentFixture<ObtenerCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObtenerCampusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenerCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
