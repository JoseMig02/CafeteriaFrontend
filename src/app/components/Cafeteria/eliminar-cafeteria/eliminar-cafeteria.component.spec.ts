import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCafeteriaComponent } from './eliminar-cafeteria.component';

describe('EliminarCafeteriaComponent', () => {
  let component: EliminarCafeteriaComponent;
  let fixture: ComponentFixture<EliminarCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarCafeteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
