import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarComponentComponent } from './ingresar-component.component';

describe('IngresarComponentComponent', () => {
  let component: IngresarComponentComponent;
  let fixture: ComponentFixture<IngresarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
