import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTipoUsuarioComponent } from './crear-tipo-usuario.component';

describe('CrearTipoUsuarioComponent', () => {
  let component: CrearTipoUsuarioComponent;
  let fixture: ComponentFixture<CrearTipoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearTipoUsuarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
