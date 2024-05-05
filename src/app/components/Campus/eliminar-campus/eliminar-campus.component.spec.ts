import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCampusComponent } from './eliminar-campus.component';

describe('EliminarCampusComponent', () => {
  let component: EliminarCampusComponent;
  let fixture: ComponentFixture<EliminarCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarCampusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
