import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XviewUsuariosComponent } from './xview-usuarios.component';

describe('XviewUsuariosComponent', () => {
  let component: XviewUsuariosComponent;
  let fixture: ComponentFixture<XviewUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [XviewUsuariosComponent]
    });
    fixture = TestBed.createComponent(XviewUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
