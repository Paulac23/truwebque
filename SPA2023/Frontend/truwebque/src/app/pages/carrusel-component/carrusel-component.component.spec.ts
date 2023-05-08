import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselComponentComponent } from './carrusel-component.component';

describe('CarruselComponentComponent', () => {
  let component: CarruselComponentComponent;
  let fixture: ComponentFixture<CarruselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
