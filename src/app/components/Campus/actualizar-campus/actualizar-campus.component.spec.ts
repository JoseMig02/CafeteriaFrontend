import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarCampusComponent } from './actualizar-campus.component';

describe('ActualizarCampusComponent', () => {
  let component: ActualizarCampusComponent;
  let fixture: ComponentFixture<ActualizarCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarCampusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
