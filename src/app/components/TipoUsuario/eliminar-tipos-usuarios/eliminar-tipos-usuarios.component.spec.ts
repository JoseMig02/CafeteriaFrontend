import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTiposUsuariosComponent } from './eliminar-tipos-usuarios.component';

describe('EliminarTiposUsuariosComponent', () => {
  let component: EliminarTiposUsuariosComponent;
  let fixture: ComponentFixture<EliminarTiposUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarTiposUsuariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarTiposUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
