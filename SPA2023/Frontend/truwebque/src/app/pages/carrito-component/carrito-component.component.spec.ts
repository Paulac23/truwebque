import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponentComponent } from './carrito-component.component';

describe('CarritoComponentComponent', () => {
  let component: CarritoComponentComponent;
  let fixture: ComponentFixture<CarritoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
